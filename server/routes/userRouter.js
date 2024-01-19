const Router = require('express'); // Import express Router
const router = new Router(); // Create Router object
const userController = require('../controllers/userController'); // Import userController object

router.post('/registration', userController.registration); // Add post request handler for route '/user'
router.post('/login', userController.login); // Add get request handler for route '/user'
router.get('/auth', userController.check); // Add get request handler for route '/user/auth'

module.exports = router; // Export router object
