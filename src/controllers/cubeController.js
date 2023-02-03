const Cube = require('../models/Cube');
const Accessory = require("../models/Accessory");

exports.getDetailsPage = async (req, res) =>{

   let cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();
   res.render("cube/details", {cube});
}

exports.getCreatePage = async (req, res) =>{
    res.render("cube/create");
}

exports.postCreatePage = async (req, res) => {

    const {name, description, imageUrl, difficultyLevel} = req.body;

    let cube = new Cube({name, description, imageUrl, difficultyLevel})
    await cube.save();

    res.redirect('/');
}

exports.getDetailsAttachPage = async (req, res) =>{

    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessory.find({_id: {$nin: cube.accessories}}).lean();

    res.render('cube/attachAccessory', {cube, accessories});
}

exports.postDetailsAttachPage = async (req, res) =>{

    const cube = await Cube.findById(req.params.cubeId);
    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);
    await cube.save();

    res.redirect(`/cubes/${cube._id}/details`);
}