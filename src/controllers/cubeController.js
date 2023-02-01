const Cube = require('../models/Cube');

exports.getDetailsPage = async (req, res) =>{

   const cube = await Cube.findById(req.params.cubeId).lean();

   //ToDo - pass attachments as well
   res.render("details", {cube});
}

exports.getCreatePage = async (req, res) =>{

    res.render("create");
}

exports.postCreatePage = async (req, res) => {

    const {name, description, imageUrl, difficultyLevel} = req.body;

    let cube = new Cube({name, description, imageUrl, difficultyLevel})
    await cube.save();

    res.redirect('/');
}