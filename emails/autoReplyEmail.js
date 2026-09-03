export function autoReplyEmail({ name, subject }) {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="margin:0;padding:0;background:#f4f7f6;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0"
style="background:white;border-radius:16px;border:1px solid #e5e7eb;overflow:hidden;">

<tr>

<td align="center"
style="background:#0F7B43;padding:40px;">

<img
src="https://metcare-alpha.vercel.app/logo.jpg"
width="90"
alt="Metcare"
/>

<h1 style="color:white;margin-top:20px;">
Thank You!
</h1>

</td>

</tr>

<tr>

<td style="padding:40px;">

<p>Hello <strong>${name}</strong>,</p>

<p>
Thank you for contacting <strong>Metcare</strong>.
</p>

<p>
We have successfully received your inquiry regarding:
</p>

<p style="
background:#ECFDF5;
padding:16px;
border-left:5px solid #0F7B43;
font-weight:bold;
">
${subject}
</p>

<p>
Our biomedical engineering team will review your inquiry and respond as soon as possible during business hours.
</p>

<hr style="margin:30px 0;">

<p style="font-size:13px;color:#9ca3af;">
This is an automated email. Please do not reply directly to this message.
</p>

</td>

</tr>

<tr>

<td align="center"
style="background:#f9fafb;padding:20px;font-size:13px;color:#9ca3af;">

Metcare Biomedical Engineering Solutions

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