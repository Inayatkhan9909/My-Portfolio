const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false, // if true it needs tls certificate
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});


  module.exports = transporter