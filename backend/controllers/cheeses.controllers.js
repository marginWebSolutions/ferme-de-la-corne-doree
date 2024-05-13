const Cheese = require('../models/cheese.model');
const fs = require('fs');

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
		title: req.body.title,
		description: req.body.description,
		imageUrl: `${req.protocol}://${req.get('host')}/images/${
			req.file.filename
		}`,
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
	const cheeseObject = req.file
		? {
				_id: req.params.id,
				title: req.body.title,
				description: req.body.description,
				imageUrl: `${req.protocol}://${req.get('host')}/images/${
					req.file.filename
				}`,
		  }
		: { ...req.body };

	Cheese.findOne({ _id: req.params.id })
		.then(() => {
			Cheese.updateOne(
				{ _id: req.params.id },
				{ ...cheeseObject, _id: req.params.id }
			)
				.then(() =>
					res.status(200).json({ message: 'Fromage modifiée !' })
				)
				.catch((error) => res.status(401).json({ error }));
		})
		.catch((error) => res.status(400).json({ error }));
};

// @desc    Delete a cheese
// @route   DELETE /api/cheeses/:id
// @access  Private
exports.deleteCheese = (req, res, next) => {
	Cheese.findOne({ _id: req.params.id })
		.then((cheese) => {
			const filename = cheese.imageUrl.split('/images/')[1];
			fs.unlink(`images/${filename}`, () => {
				Cheese.deleteOne({ _id: req.params.id })
					.then(() =>
						res.status(200).json({ message: 'Fromage supprimé !' })
					)
					.catch((error) => res.status(401).json({ error }));
			});
		})
		.catch((error) => res.status(500).json({ error }));
};
