const router = require('express').Router();

const homeController = require('./controllers/homeController');
const enController = require('./controllers/enController');
const bgCoontroller = require('./controllers/bgController');

router.use('/', homeController);
router.use('/en', enController);
router.use('/bg', bgCoontroller);

module.exports = router;