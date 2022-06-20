import nodemailer from 'nodemailer'
import { google } from 'googleapis'
const OAuth2 = google.auth.OAuth2

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  })

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject('Failed to get access token')
      }
      resolve(token)
    })
  })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASS,
      accessToken,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    },
  })

  return transporter
}

export default async (req, res) => {
  const { name, email, message } = req.body

  const sendEmail = async (emailOptions) => {
    try {
      let emailTransporter = await createTransporter()
      await emailTransporter.sendMail(emailOptions)
    } catch (error) {
      console.log(error)
    }
  }

  try {
    await sendEmail({
      subject: `Contact Form Submission from ${name}`,
      to: process.env.SENDER_EMAIL,
      from: process.env.EMAIL_USER,
      html: `<p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
  return res.status(200).json({ error: '' })
}

// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// })

// try {
//   await transporter.sendMail({
//     from: email,
//     to: 'saybencodes@gmail.com',
//     subject: `Contact form submission from ${name}`,
// html: `<p>You have a contact form submission</p><br>
//   <p><strong>Email: </strong> ${email}</p><br>
//   <p><strong>Message: </strong> ${message}</p><br>
// `,
//   })
// } catch (error) {
//   return res.status(500).json({ error: error.message || error.toString() })
// }
// return res.status(200).json({ error: '' })
