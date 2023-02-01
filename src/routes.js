const router = require("express").Router();
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');


router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

router.get('/details/:cubeId', cubeController.getDetailsPage)

router.get('/create', cubeController.getCreatePage);

module.exports = router;
