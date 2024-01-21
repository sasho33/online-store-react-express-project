const Router = require('express'); // Import express Router
const router = new Router(); // Create Router object
const brandController = require('../controllers/brandController'); // Import brandController object

router.post('/', brandController.create); // Add post request handler for route '/brand'
router.get('/', brandController.getAll); // Add get request handler for route '/brand'

module.exports = router; // Export router object
