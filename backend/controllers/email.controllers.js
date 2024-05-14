const dotenv = require('dotenv').config();
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

exports.forwardEmail = (req, res) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
		},
	});

	const MailGenerator = new Mailgen({
		theme: 'cerberus',
		product: {
			name: 'Margin Web Solutions',
			link: 'marc-villevieille.com',
		},
	});

	const email = {
		body: {
			greeting: 'Bonjour',
			signature: 'Cordialement',
			name: 'Julie',
			intro:
				'Vous avez reçu un email de la part de Mme/Mr ' +
				req.body.prenom +
				' ' +
				req.body.nom,
			action: {
				instructions: `${req.body.message}`,
				button: [
					{
						color: '#22BC66',
						text: `Cliquer ici pour répondre à ${req.body.prenom} ${req.body.nom}`,
						link: 'mailto:' + req.body.email,
					},
				],
			},
			outro: "Si vous avez des questions, n'hésitez pas à nous contacter.",
		},
	};

	let emailBody = MailGenerator.generate(email);
	let emailText = MailGenerator.generatePlaintext(email);

	const mailOptions = {
		from: req.body.email,
		to: process.env.MAIL_USERNAME,
		subject: req.body.objet,
		html: emailBody || emailText,
	};

	transporter.sendMail(mailOptions, (error, data) => {
		if (error) {
			res.status(500).send({ message: "Erreur lors de l'envoi du mail" });
		} else {
			res.status(200).send({ message: 'Mail envoyé avec succès' });
		}
	});
};
