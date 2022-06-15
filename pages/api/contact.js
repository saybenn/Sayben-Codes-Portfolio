import nodemailer from 'nodemailer'

export default async (req, res) => {
  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: email,
      to: 'saybencodes@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
  return res.status(200).json({ error: '' })
}
