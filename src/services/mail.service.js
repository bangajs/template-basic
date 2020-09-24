const nodemailer = require('nodemailer')
const config = require('../../config')[process.env.NODE_ENV]
const templatingService = new (require('./TemplatingService'))();

class MailService {
     constructor() {
          this.transporter = nodemailer.createTransport(config.mail);
     }

     getTemplate(context, template = "emails/default.jade") {
          return templatingService.render(template, context);
     };

     async sendMail(from, to, subject, context, template) {
          from = from || '"no-reply XXX" <no-reply@xxx.xxx>'
          context = context || {}

          if (!to) throw new Error("Recipient is required");
          if (!subject) throw new Error("Subject is required");

          return await this.transporter.sendMail({
               from,
               to: Array.isArray(to) ? to.join() : to,
               subject: subject,
               html: this.getTemplate(context, template)
          });
     }
}

module.exports = MailService