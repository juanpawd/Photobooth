const nodemailer = require('nodemailer');
const htmlToText = require('html-to-text');
const promisify = require('es6-promisify');

const transport = nodemailer.createTransport({
    host: 'mail.estudiograficocr.com',
    port: 26,
    auth: {
        user: 'test@estudiograficocr.com',
        pass: 'Test#20192'
    }
});

exports.send = async (options) => {
    const mailOptions = {
        from: 'Juan Pablo M <noreply@juanpawd.com>',
        to: 'juanpamv3@gmail.com',
        subject: 'test',
        html: '<p>Hola</p>',
        text: "text"
    };
    const sendMail = promisify(transport.sendMail, transport);
    return sendMail(mailOptions);
}