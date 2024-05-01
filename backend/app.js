const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');

const Actualite = require('./models/actualite.model');
const Cheese = require('./models/cheese.model');

// Connect to MongoDB
connectDB();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware logging
app.use((req, res, next) => {
	console.log(req.method, req.path);
	next();
});

// Middleware that handle the data of the request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, '/../frontend/public')));

// Routes
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/../frontend/public/index.html');
});

app.post('/api/captcha', (req, res) => {
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

// @desc    Get all news
// @route   GET /api/actualites
// @access  Public
app.get('/api/actualites', (req, res) => {
	Actualite.find()
		.then((actualites) => res.status(200).json(actualites))
		.catch((error) => res.status(400).json({ error }));
});

// @desc    Add a news
// @route   POST /api/actualites
// @access  Private
app.post('/api/actualites', (req, res, next) => {
	const actualite = new Actualite({
		...req.body,
	});
	actualite
		.save()
		.then(() => res.status(201).json({ message: 'Actualité enregistré !' }))
		.catch((error) => res.status(400).json({ error }));
});

// @desc    Get all cheeses
// @route   GET /api/cheeses
// @access  Public
app.get('/api/cheeses', (req, res) => {
	Cheese.find()
		.then((cheeses) => res.status(200).json(cheeses))
		.catch((error) => res.status(400).json({ error }));
});

// @desc    Add a cheese
// @route   POST /api/cheeses
// @access  Private
app.post('/api/cheeses', (req, res, next) => {
	const cheese = new Cheese({
		...req.body,
	});
	cheese
		.save()
		.then(() => res.status(201).json({ message: 'Fromage enregistré !' }))
		.catch((error) => res.status(400).json({ error }));
});

module.exports = app;
