const Router = require('express'); // Import express Router
const router = new Router(); // Create Router object
const deviceController = require('../controllers/deviceController'); // Import deviceController object

router.post('/', deviceController.create); // Add post request handler for route '/device'
router.get('/', deviceController.getAll); // Add get request handler for route '/device'
router.get('/:id', deviceController.getOne); // Add get request handler for route '/device/:id'

module.exports = router; // Export router object
