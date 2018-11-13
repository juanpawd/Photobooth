
const mail = require('./../handlers/mail');

exports.sendMail = async (req, res) => {
	console.log(req.body);

	await mail.send({
		user: "hola",
		subject: 'Password Reset',
		filename: 'password-reset',
	})
}
