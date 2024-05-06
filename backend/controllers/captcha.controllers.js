const dotenv = require('dotenv').config();
const request = require('request');

exports.validateCaptchaResponse = (req, res) => {
	if (
		req.body.captcha === undefined ||
		req.body.captcha === '' ||
		req.body.captcha === null
	) {
		return res.json({ success: false, msg: 'Please select captcha' });
	}

	// Secret Key
	const secretKey = process.env.SECRET_KEY;
	// Verify URL
	const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&remoteip=${req.ip}`;

	// Make Request To VerifyURL
	request(verifyUrl, (err, response, body) => {
		body = JSON.parse(body);
		// If Not Successful
		if (body.success !== undefined && !body.success) {
			return res.json({
				success: false,
				msg: 'Failed captcha verification',
			});
		}
		// If Successful
		return res.json({ success: true, msg: 'Captcha passed' });
	});
};
