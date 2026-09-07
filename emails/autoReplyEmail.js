export function autoReplyEmail({ name, message, category, isAnonymous }) {
  const copy = {
    Complaint: {
      heading: "We've received your complaint",
      intro:
        "Thank you for letting us know. Your complaint has been logged and our team will review it and follow up as needed.",
      label: "Your Complaint",
    },
    Feedback: {
      heading: "Thank you for your feedback",
      intro:
        "We appreciate you taking the time to share your thoughts with us. Your feedback helps us improve.",
      label: "Your Feedback",
    },
    Inquiry: {
      heading: "Thank you for reaching out",
      intro:
        "We've received your inquiry and a member of our team will get back to you shortly during business hours.",
      label: "Your Inquiry",
    },
  };

  const { heading, intro, label } = copy[category] || copy.Inquiry;

  const isAnonymousComplaint = category === "Complaint" && isAnonymous;

  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="margin:0;padding:0;background:#fafafa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1a1a1a;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:64px 20px;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;">

<!-- Header -->
<tr>
<td style="padding:44px 48px 28px;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
  <td style="text-align:center;">
    <img
      src="https://www.metcarebiomedical.com/assets/logo-BqK5G03e.jpg"
      width="210"
      alt="Metcare"
      style="display:block;margin:0 auto;"
    />
  </td>
</tr>
</table>
</td>
</tr>

<tr>
<td style="padding:0 48px 44px;border-top:1px solid #eeeeee;">

<h1 style="margin:36px 0 10px;font-size:19px;font-weight:600;color:#111111;">
${isAnonymousComplaint ? heading : `${heading}, ${name}`}
</h1>

<p style="margin:0 0 36px;font-size:14px;line-height:1.6;color:#767676;">
${intro}
</p>

<!-- Subject -->
<div style="font-size:12px;color:#a3a3a3;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">
${label}
</div>

<div style="font-size:14px;line-height:1.8;color:#333333;padding:24px 28px;border-left:2px solid #0F7B43;background:#fafafa;">
${message.replace(/\n/g, "<br>")}
</div>

<p style="margin:0;font-size:13px;line-height:1.6;color:#a3a3a3;">
This is an automated confirmation. Please do not reply directly to this email.
</p>

</td>
</tr>

<!-- Footer -->
<tr>
<td style="padding:28px 48px 44px;border-top:1px solid #eeeeee;">
<p style="font-size:12px;color:#bfbfbf;margin:0;">
METCARE Biomedical Corporation
</p>
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
}