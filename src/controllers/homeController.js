const Cube = require('../models/Cube');

exports.getHomePage = async (req, res) =>{

    const {search, from, to} = req.query;

    let cube = await Cube.find().lean();

    if(search){

       cube = cube.filter(cube=>cube.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }
    if(from){
        cube = cube.filter(cube=>cube.difficultyLevel >= from)
    }
    if(to){
        cube =  cube.filter(cube=>cube.difficultyLevel <= to)
    }
    res.render('index', {cube});
}

exports.getAboutPage = (req, res) =>{

    res.render('about');
}

exports.getErrorPage = (req, res) => {

    res.render('404');
}