const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const port = process.env.PORT || 3001;

const app = express();

// Middleware CORS
app.use(cors());

// Middleware logging
app.use((req, res, next) => {
	console.log(req.method, req.path);
	next();
});

// Middleware that handle the data of the request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../frontend/public')));

// Routes
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/../frontend/public/index.html');
});

app.post('/contact', (req, res) => {
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
});

// Listen for requests
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
