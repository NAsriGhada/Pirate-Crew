const { PirateSchema } = require('../models/pirate.model');


module.exports.createPirate = (request, response) => {
    const { name, image, chest, catchPhrase, position, checkBox } = request.body;
    PirateSchema.create({
        name,
        image, 
        chest, 
        catchPhrase,
        position,
        checkBox
    })
        .then(pirate => response.status(200).json(pirate))
        .catch(err => response.status(400).json(err));
}



module.exports.getAllPirates = (request, response) => {
    PirateSchema.find()
        .then(pirates => response.json(pirates))
        .catch(err => response.status(400).json(err))
}



module.exports.getOnePirate = (req, res) => {
	PirateSchema.findOne({ _id: req.params.id})
		.then(oneSinglePirate => res.status(200).json(oneSinglePirate))
		.catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};



module.exports.updatePirate = (req, res) => {
    PirateSchema.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then(updatedPirate => res.status(200).json(updatedPirate))
      .catch(err => res.status(400).json(err));
  };



  module.exports.deleteAnExistingPirate = (req, res) => {
    PirateSchema.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
  };