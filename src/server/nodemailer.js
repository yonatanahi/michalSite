var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yonatanahiram@gmail.com",
    pass: "JabelAtaka1986",
  },
});

var mailOptions = {
  from: "yonatanahiram@gmail.com",
  to: "yonatanahiram@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
