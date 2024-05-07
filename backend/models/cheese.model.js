const mongoose = require('mongoose');

const cheeseSchema = mongoose.Schema(
	{
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
		caption: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Cheese', cheeseSchema);
