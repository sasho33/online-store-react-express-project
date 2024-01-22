const Router = require('express'); // Import express Router
const router = new Router(); // Create Router object
const typeController = require('../controllers/typeController'); // Import typeController object
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN'), typeController.create); // Add post request handler for route '/type'
router.get('/', typeController.getAll); // Add get request handler for route '/type'

module.exports = router; // Export router object
