const router = require('express').Router();

const Accessory = require('../models/Accessory');

router.get('/create', (req, res) =>{

    res.render('createAccessory');
})

router.post('/create', (req, res) =>{

    
})


module.exports = router;