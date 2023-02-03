const mongoose = require("mongoose");

const cubeShema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    difficultyLevel: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/^https?:\/\//, "Invalid URL"]
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]
})

const Cube = mongoose.model('Cube', cubeShema);

module.exports = Cube;