const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/signup').post(userController.signUp);
router.route('/login').post(userController.login);
router.route('/logout').post(userController.logout);

module.exports = router;
