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
		timestamp: true,
	}
);

module.exports = moongoose.model('Article', articleSchema);
