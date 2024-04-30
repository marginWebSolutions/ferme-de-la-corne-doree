const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const connection = await mongoose
			.connect(process.env.MONGO_URI, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => console.log('Connexion à MongoDB réussie !'));
	} catch (error) {
		console.log(`Connexion à MongoDB échouée ! ${error}`);
		process.exit();
	}
};

module.exports = connectDB;
