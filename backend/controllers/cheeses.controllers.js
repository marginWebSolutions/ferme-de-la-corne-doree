const Cheese = require('../models/cheese.model');

// @desc    Get all cheeses
// @route   GET /api/cheeses
// @access  Public
exports.getAllCheeses = (req, res) => {
	Cheese.find()
		.then((cheeses) => res.status(200).json(cheeses))
		.catch((error) => res.status(400).json({ error }));
};

// @desc    Get a cheese
// @route   GET /api/cheeses/:id
// @access  Private
exports.getOneCheese = (req, res, next) => {
	Cheese.findOne({ _id: req.params.id })
		.then((cheese) => res.status(200).json(cheese))
		.catch((error) => res.status(404).json({ error }));
};

// @desc    Create a cheese
// @route   POST /api/cheeses
// @access  Private
exports.createCheese = (req, res, next) => {
	const cheese = new Cheese({
		...req.body,
	});
	cheese
		.save()
		.then(() => res.status(201).json({ message: 'Fromage enregistré !' }))
		.catch((error) => res.status(400).json({ error }));
};

// @desc    Update a cheese
// @route   PUT /api/cheeses/:id
// @access  Private
exports.modifyCheese = (req, res, next) => {
	Cheese.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then(() => res.status(200).json({ message: 'Fromage modifiée !' }))
		.catch((error) => res.status(400).json({ error }));
};

// @desc    Delete a cheese
// @route   DELETE /api/cheeses/:id
// @access  Private
exports.deleteCheese = (req, res, next) => {
	Cheese.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Fromage supprimée !' }))
		.catch((error) => res.status(400).json({ error }));
};
