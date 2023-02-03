const router = require("express").Router();
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');


router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

router.use('/', authController);

router.get(`/cubes/:cubeId/details`, cubeController.getDetailsPage)

router.get('/create', cubeController.getCreatePage);
router.post('/create', cubeController.postCreatePage);
router.get('/cubes/:cubeId/attach', cubeController.getDetailsAttachPage);
router.post('/cubes/:cubeId/attach', cubeController.postDetailsAttachPage);

router.use('/accessories', accessoryController);

module.exports = router;
