const Cube = require('../models/Cube');
const Accessory = require("../models/Accessory");

exports.getDetailsPage = async (req, res) =>{

   const cube = await Cube.findById(req.params.cubeId).lean();

   //ToDo - pass accessories as well
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

exports.getDetailsAttachPage = async (req, res) =>{

    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessory.find({_id: {$nin: cube.accessories}}).lean();

    res.render('attachAccessory', {cube, accessories});
}

exports.postDetailsAttachPage = async (req, res) =>{

    const cube = await Cube.findById(req.params.cubeId);
    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);
    await cube.save();

    res.redirect(`/cubes/${cube._id}/details`);
}