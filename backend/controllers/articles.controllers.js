const Article = require('../models/article.model');

// @desc    Get all articles
// @route   GET /api/actualites
// @access  Public
exports.getAllArticles = (req, res) => {
	Article.find()
		.then((article) => res.status(200).json(article))
		.catch((error) => res.status(400).json({ error }));
};

// @desc    Get an article
// @route   GET /api/actualites/:id
// @access  Private
exports.getOneArticle = (req, res, next) => {
	Article.findOne({ _id: req.params.id })
		.then((article) => res.status(200).json(article))
		.catch((error) => res.status(404).json({ error }));
};

// @desc    Create an article
// @route   POST /api/actualites
// @access  Private
exports.createArticle = (req, res, next) => {
	const article = new Article({
		...req.body,
	});
	article
		.save()
		.then(() => res.status(201).json({ message: 'Actualité enregistré !' }))
		.catch((error) => res.status(400).json({ error }));
};

// @desc    Modify an article
// @route   PUT /api/actualites/:id
// @access  Private
exports.modifyArticle = (req, res, next) => {
	Article.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then(() => res.status(200).json({ message: 'Actualité modifiée !' }))
		.catch((error) => res.status(400).json({ error }));
};

// @desc    Delete an article
// @route   DELETE /api/actualites/:id
// @access  Private
exports.deleteArticle = (req, res, next) => {
	Article.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Actualité supprimée !' }))
		.catch((error) => res.status(400).json({ error }));
};
