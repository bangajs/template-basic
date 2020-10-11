const nodemailer = require("nodemailer");
const CustomError = require("./../utils/custom-error");
const { mailer, APP_NAME } = require("./../config");

class MailService {
     constructor() {
          const options = {
               host: mailer.HOST,
               port: mailer.PORT,
               secure: mailer.SECURE,
               auth: {
                    user: mailer.USER,
                    pass: mailer.PASSWORD
               }
          }

          this.transporter = nodemailer.createTransport(options);
     }

     async send(from, to, subject, content) {
          from = from || `${APP_NAME} <no-reply${mailer.DOMAIN}>`
          content = content || "lorem20 and some othe things"

          if (!to) throw new CustomError("Recipient is required");
          if (!subject) throw new CustomError("Subject is required");

          const sent = await this.transporter.sendMail({
               from,
               to: Array.isArray(to) ? to.join() : to,
               subject,
               text: content
          });

          console.log(sent)
     }
}

module.exports = MailService


let ms = new MailService()

ms.send(null, "onyegbuifedili@gmail.com", "Hello Ifedili")