const router = require('express').Router();

const Accessory = require('../models/Accessory');

router.get('/create', (req, res) =>{

    res.render('accessory/createAccessory');
})

router.post('/create', async (req, res) =>{

    const {name, description, imageUrl} = req.body;

    const accessory = new Accessory({name, description, imageUrl});
    await accessory.save()
    res.redirect('/');
})

module.exports = router;