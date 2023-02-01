const router = require("express").Router();
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');


router.get('/', homeController.getHomePage);

router.get('/details/:cubeID', )



module.exports = router;
