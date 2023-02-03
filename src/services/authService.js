const User = require('../models/User');
const { use } = require('../routes');

exports.register = async (username, password) => {

    await User.create({username, password});
}

exports.getUserByUsername = (username) => User.findOne({username});