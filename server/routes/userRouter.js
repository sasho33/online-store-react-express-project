const Router = require('express'); // Import express Router
const router = new Router(); // Create Router object

router.post('/registration'); // Add post request handler for route '/user'
router.post('/login'); // Add get request handler for route '/user'
router.get('/auth', (req, res) => {
  // Add get request handler for route '/user/auth'
  res.json({ message: 'All is ok' }); // Send response
});

module.exports = router; // Export router object
