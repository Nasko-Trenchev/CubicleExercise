const mongoose = require('mongoose');

const userShema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        minLenght: 3
    },
    password: {
        type: String,
        required: true,
        minLenght: 6
    }
})

const User = mongoose.model('User', userShema);

module.exports = User;