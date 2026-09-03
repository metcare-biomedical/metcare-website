import { Resend } from "resend";
import { ratelimit } from "../lib/rateLimit.js";
import { adminEmail } from "../emails/adminEmail.js";
import { autoReplyEmail } from "../emails/autoReplyEmail.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    // Only allow POST requests
    if (req.method !== "POST") {
      return res.status(405).json({
        success: false,
        message: "Method Not Allowed",
      });
    }

    // Get visitor IP
    const forwarded = req.headers["x-forwarded-for"];

    const ip = Array.isArray(forwarded)
      ? forwarded[0]
      : forwarded?.split(",")[0].trim() ||
        req.socket?.remoteAddress ||
        "127.0.0.1";

    // Get form data
    const {
      name,
      email,
      subject,
      category,
      message,
      isAnonymous,
      turnstileToken,
      website,
    } = req.body;

    if (website) {
      return res.status(200).json({
        success: true,
      });
    }

    // Check server configuration
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "Resend API key is missing.",
      });
    }

    if (!process.env.CONTACT_EMAIL) {
      return res.status(500).json({
        success: false,
        message: "Contact email is missing.",
      });
    }

    if (!process.env.TURNSTILE_SECRET_KEY) {
      return res.status(500).json({
        success: false,
        message: "Turnstile secret key is missing.",
      });
    }

    // Rate limit
    const { success, reset } = await ratelimit.limit(ip);

    if (!success) {
      return res.status(429).json({
        success: false,
        message:
          "Too many requests. Please wait a few minutes before trying again.",
        retryAfter: Math.max(0, Math.ceil((reset - Date.now()) / 1000)),
      });
    }

    // Required fields
    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message fields are required.",
      });
    }

    const allowedCategories = ["Complaint", "Feedback", "Inquiry"];

    if (!allowedCategories.includes(category)) {
      return res.status(400).json({
        success: false,
        message: "Invalid type of concern.",
      });
    }

    // Email validation
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // if (!emailRegex.test(email)) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Please enter a valid email address.",
    //   });
    // }

    // Turnstile token
    if (!turnstileToken) {
      return res.status(400).json({
        success: false,
        message: "CAPTCHA verification failed.",
      });
    }

    // Verify Turnstile
    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      },
    );

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      console.error("Turnstile verification failed:", verifyData);

      return res.status(403).json({
        success: false,
        message: "CAPTCHA verification failed.",
      });
    }

    const allowedHosts = ["localhost", "metcare-nine.vercel.app"];

    if (!allowedHosts.includes(verifyData.hostname)) {
      console.error("Unexpected Turnstile hostname:", verifyData.hostname);

      return res.status(403).json({
        success: false,
        message: "Invalid request origin.",
      });
    }

    // Send email
    const { error } = await resend.emails.send({
      from: "Metcare <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `${category} message from Website`,
      html: adminEmail({
        name,
        email,
        subject,
        category,
        message,
        isAnonymous,
      }),
    });

    if (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Failed to send email.",
      });
    }

    // Send confirmation email to the customer
    const { error: autoReplyError } = await resend.emails.send({
      from: "Metcare <onboarding@resend.dev>",
      to: email,
      subject: "We've received your inquiry",
      html: autoReplyEmail({
        name,
        subject,
      }),
    });

    if (autoReplyError) {
      console.error("Auto reply failed:", autoReplyError);
    }

    // Return success AFTER both emails are sent
    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}
