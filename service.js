const nodeMailer = require("nodemailer");
const jwt = require("jsonwebtoken");

exports.getTransport = () => nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAILADDRESS,
        pass: process.env.EMAILPASSWORD
    }
});

exports.generateToken = (email) => {
    const expirationDate = new Date();
    expirationDate.setMinutes(new Date().getMinutes() + 45);

    return jwt.sign({ email, expirationDate }, process.env.JWTSECRETKEY);
};

exports.getMailOptions = (email, link) => {
    const body = `
    <h2>Olá<h2>
    <p>Acesse o <a href="${link}">link</a> para confirmar o seu email<p>
    `
  
    return {
      body,
      subject: "Noteblocs: Validação de email",
      to: email,
      html: body,
      from: process.env.EMAIL_ADDRESS,
    };
};