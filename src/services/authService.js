
const jwt = require('../lib/jsonWebToken');
const config = require('../config')

const User = require('../models/User');

exports.register = async (username, password) => User.create({username, password})

exports.getUserByUsername = (username) => User.findOne({username});

exports.login = async (username, password) => {

    const user = await this.getUserByUsername(username);

    const isValid = await user.validatePassword(password)

    if(!user || !isValid){

        throw "Invalid username or password!";
    }

    const payload = {_id: user._id, username: user.username}
    const token = await jwt.sign(payload, config.SECRET, {expiresIn: '2h'})
    return token;
}