const Cube = require('../models/Cube');

exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.updateCube = (cubeId, data) => Cube.findOneAndUpdate(cubeId, data, {runValidators: true})