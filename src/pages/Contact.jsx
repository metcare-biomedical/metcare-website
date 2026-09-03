import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";
import { useRef } from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

function Contact() {
  const turnstileRef = useRef();
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isAnonymous, setAnonymous] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "Inquiry",
    message: "",
  });

  const [turnstileToken, setTurnstileToken] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "category") {
      if (value === "Complaint") {
        setAnonymous(true);
      } else {
        setAnonymous(false);
      }
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          isAnonymous,
          turnstileToken,
          website,
        }),
      });

      const responseText = await response.text();

      let data = {};

      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch {
        data = {};
      }

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            "You've sent too many messages. Please wait a few minutes and try again.",
          );
        }

        throw new Error(
          data.message ||
            `Server error (${response.status}). Please try again.`,
        );
      }

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "Inquiry",
        message: "",
      });

      setWebsite("");

      setTurnstileToken("");

      turnstileRef.current?.reset();
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section>
      <section className="relative w-full bg-cover bg-center bg-no-repeat px-5 py-20 lg:py-30">
        <div
          className="absolute inset-0
      bg-[url('/images/services/bg.webp')]
      bg-cover bg-center bg-no-repeat
      opacity-80
      [mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_100%,transparent_100%)]"
        />
        <div className="relative z-10">
          <SectionHeader
            title="Let's Discuss Your Healthcare Equipment Needs"
            description="Have questions or need a quotation? Send us a message and our team will get back to you as soon as possible."
          />
        </div>
      </section>

      <div className="overflow-hidden shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.0840866595327!2d121.07457169999999!3d14.306546899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d79898932e1f%3A0x1e0676f1660ced59!2sMetcare%20Biomedical%20Corporation!5e0!3m2!1sen!2sph!4v1784788020003!5m2!1sen!2sph"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="METCARE Location"
        />
      </div>

      <section className="relative w-full bg-cover bg-center bg-no-repeat lg:py-15">
        <div
          className="absolute inset-0
      bg-[url('/images/about/bg.webp')]
      bg-cover bg-center bg-no-repeat
      opacity-40
      [mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_100%,transparent_100%)]"
        />
        <div className="relative z-10 py-10">
          <Container>
            {/* Contact Information */}

            <div className=" grid gap-12 lg:grid-cols-2">
              <div className="sm:mt-15 space-y-12">
                <SectionHeader
                  badge="Contact Us"
                  title="We Offer 24/7 Emergency Service To All of Our Customers"
                  description="Because healthcare never stops, neither do we. Our dedicated biomedical team is available around the clock to respond to urgent service calls, equipment breakdowns, and critical technical issues. With fast response times and expert care, we make sure your medical equipment is always ready when lives depend on it."
                  center={false}
                />
                <div className="grid gap-12 lg:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex gap-2 items-center">
                      <FaEnvelope className="text-green-600 text-xl" />
                      <h2 className="text-lg font-semibold">Email</h2>
                    </div>
                    <p className="">metcare.biomedical@gmail.com</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-center">
                      <FaClock className="text-green-600 text-xl" />
                      <h2 className="text-lg font-semibold">Open Hours</h2>
                    </div>
                    <p className="">Mon-Sat: 8am-5pm</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-center">
                      <MdOutlinePhoneIphone className="text-green-600 text-2xl" />
                      <h2 className="text-lg font-semibold">Mobile Number</h2>
                    </div>
                    <p className="">(0915) 289-5621</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-center">
                      <FaPhone className="text-green-600 text-xl" />
                      <h2 className="text-lg font-semibold">Landline Number</h2>
                    </div>
                    <p className="">(049) 502-6984</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-6 border border-slate-300 shadow-md rounded-md"
              >
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  autoComplete="off"
                  tabIndex="-1"
                  className="hidden"
                />

                <div className="space-y-2">
                  <label
                    htmlFor="category"
                    className="block font-medium text-slate-700"
                  >
                    Type of Concern
                  </label>

                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600 disabled:cursor-not-allowed disabled:bg-slate-100"
                  >
                    <option value="Inquiry">Inquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Complaint">Complaint</option>
                  </select>
                </div>
                {formData.category === "Complaint" && (
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="anonymous"
                      checked={isAnonymous}
                      onChange={(e) => setAnonymous(e.target.checked)}
                    />
                    <label className="block font-medium text-slate-700">
                      Remain Anonymous
                    </label>
                  </div>
                )}

                {formData.category !== "Complaint" ? (
                  <>
                    <Input
                      disabled={isSubmitting}
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />

                    <Input
                      disabled={isSubmitting}
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />

                    <Input
                      disabled={isSubmitting}
                      label="Number"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. XXX-XXXX-XXX"
                    />
                  </>
                ) : (
                  formData.category === "Complaint" &&
                  !isAnonymous && (
                    <>
                      <Input
                        disabled={isSubmitting}
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                      />

                      <Input
                        disabled={isSubmitting}
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />

                      <Input
                        disabled={isSubmitting}
                        label="Number"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. XXX-XXXX-XXX"
                      />
                    </>
                  )
                )}

                <Textarea
                  disabled={isSubmitting}
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                />

                <Turnstile
                  ref={turnstileRef}
                  disabled={isSubmitting}
                  siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                  onSuccess={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken("")}
                  onError={() => setTurnstileToken("")}
                  className="w-[50px] scale-[0.7] sm:scale-[0.9] origin-top-left"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      {isSubmitting && (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      )}
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </Container>
        </div>
      </section>
    </section>
  );
}

export default Contact;
