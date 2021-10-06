// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'

export default async(req, res) => {
  // return res.send({answer:"in"})
  if (req.body.email) {
    // console.log(req.body,"body")
    const email = req.body.email;
    let transport = nodemailer.createTransport({
      host: "smtp-mail.outlook.com", // hostname
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      tls: {
        ciphers: 'SSLv3'
      },
      auth: {
        user: 'testwitnol@outlook.com',
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const message = {
      from: 'testwitnol@outlook.com', // Sender address
      to: email,         // List of recipients
      subject: 'Design Your Model S | Tesla', // Subject line
      text: 'Have the most fun you can in a car. Get your Tesla today!', // Plain text body
      html:
        `<h1>Are you ready or what?!</h1>
          OIf you requested a password recovery, please click this link to get a new password.
          `
    };

    transport.sendMail(message, function (err, info) {
      if (err) {
        // console.log(err)
        return res.status(404).json({ body: 'Damn!!' + `${err}` })
      } else {
        // console.log(info);
        return res.status(200).json({ body: 'Success!' })
      }
    });
    // return res.status(200).json({ body: 'Success!' })
  }
}
