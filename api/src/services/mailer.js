import path from 'path'
import hbs from 'nodemailer-express-handlebars'
import nodemailer from 'nodemailer'
import mailgunTransport from 'nodemailer-mailgun-transport'

const mailgunOptions = {
  auth: {
    api_key: process.env.MAILGUN_ACTIVE_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  }
}

const transport = mailgunTransport(mailgunOptions)
const smtpTransport = nodemailer.createTransport(transport)
debugger;
var handlebarsOptions = {
  viewEngine: 'handlebars',
  viewPath: path.resolve('./src/emails/'),
  extName: '.html'
}

smtpTransport.use('compile', hbs(handlebarsOptions))

export default smtpTransport
