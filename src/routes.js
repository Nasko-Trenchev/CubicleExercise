const router = require("express").Router();
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accessoryControler = require('./controllers/accessoryController');


router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

router.get('/details/:cubeId', cubeController.getDetailsPage)

router.get('/create', cubeController.getCreatePage);
router.post('/create', cubeController.postCreatePage);
router.get('/cubes/:cubeId/attach', cubeController.getDetailsAttachPage);
router.post('/cubes/:cubeId/attach', cubeController.postDetailsAttachPage);

router.use('/accessories', accessoryControler);

module.exports = router;
