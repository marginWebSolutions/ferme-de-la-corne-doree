const moongoose = require('mongoose');

const articleSchema = moongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = moongoose.model('Article', articleSchema);
