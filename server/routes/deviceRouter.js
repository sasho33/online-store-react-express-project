const Router = require('express'); // Import express Router
const router = new Router(); // Create Router object

router.post('/'); // Add post request handler for route '/device'
router.get('/'); // Add get request handler for route '/device'
router.get('/:id'); // Add get request handler for route '/device/:id'

module.exports = router; // Export router object
