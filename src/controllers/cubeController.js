const Cube = require('../models/Cube');

exports.getDetailsPage = async (req, res) =>{

   const cube = await Cube.findById(req.params.cubeId).lean();

   res.render("details", {cube});
}