const Cube = require('../models/Cube');

exports.getHomePage = async (req, res) =>{

    const cube = await Cube.find().lean();
    res.render('index', {cube});
}


exports.getAboutPage = async (req, res) =>{

    res.render('about');
}
