const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Connect to MongoDB
connectDB();

// Create an Express app
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

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/../frontend/public/index.html');
});

app.use('/api/actualites', require('./routes/articles.routes'));
app.use('/api/fromages', require('./routes/cheeses.routes'));
app.use('/api/captcha', require('./routes/captcha.routes'));
app.use('/api/auth', require('./routes/users.routes'));

module.exports = app;
