const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: process.env.MAILHOG_HOST,
  port: "1025",
  auth: null
});

transport.sendMail({
  from: "Iarlen <iarlen@gmail.com>",
  to: "Eu <eu@gmail.com>",
  subject: "Teste fo MailHog",
  html: "<h1>Funcionou</h1>"
});
