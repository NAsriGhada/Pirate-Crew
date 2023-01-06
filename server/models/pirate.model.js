const mongoose = require('mongoose');


const PirateSchema = new mongoose.Schema({
    name: {    type: String,
                required: [true, "You must type the name"],
                minLength: [3, "Name must be at least 3 characters long"]
                },
    image: {
        type: String,
        required: [true, "You must insert an image"],
    },
    chest: {
        type: Number,
        required: [true, "You must insert a number bigger than 0"],
        minLength: [3, "Number must be at least 3"]
    },
    catchPhrase: {
        type: String,
        required: [true, "You must type a catch"],
        minLength: [6, "Catch must be at least 6 characters long"]
    },
    position: {
        type: String,
        required: [true, "You must type"]
    },
    checkBox: {
        type: Boolean,
        default: true,
        required: [true, "You must insert something"]
    },


}, 
{ timestamps: true });
module.exports.PirateSchema = mongoose.model('PirateSchema', PirateSchema);