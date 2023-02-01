const router = require("express").Router();
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');


router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);

router.get('/details/:cubeId', cubeController.getDetailsPage)



module.exports = router;
