const mongoose = require('mongoose');

const accessoryShema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/^https?:\/\//, "Invalid URL"]
    },
    description: {
        type: String,
        required: true,
        maxLenght: 50
    }
})

const Accessory = mongoose.model('Accessory', accessoryShema);

module.exports = Accessory;