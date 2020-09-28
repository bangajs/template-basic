const nodemailer = require('nodemailer');
const CustomError = require('./../utils/custom-error');
const { MAILER_NAME, MAILER_HOST, MAILER_USER, MAILER_PASSWORD } = process.env

class MailService {
     constructor() {
          this.transporter = nodemailer.createTransport({
               name: MAILER_NAME,
               host: MAILER_HOST,
               port: 465,
               secure: true,
               auth: {
                    user: MAILER_USER,
                    pass: MAILER_PASSWORD
               },
          });
     }

     async send(from, to, subject, context, template) {
          from = from || '"no-reply XXX" <no-reply@xxx.xxx>'
          context = context || {}

          if (!to) throw new CustomError("Recipient is required");
          if (!subject) throw new CustomError("Subject is required");

          return await this.transporter.sendMail({
               from,
               to: Array.isArray(to) ? to.join() : to,
               subject,
               html: template
          });
     }
}

module.exports = MailService