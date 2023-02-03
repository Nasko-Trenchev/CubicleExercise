const User = require('../models/User');

exports.register = async (username, password) => User.create({username, password})

exports.getUserByUsername = (username) => User.findOne({username});

exports.login = async (username, password) => {

    const user = await this.getUserByUsername(username);

    const isValid = await user.validatePassword(password)

    if(!user || !isValid){

        throw "Invalid username or password!";
    }

    return user;
}