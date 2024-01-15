const Router = require('express'); // Import express Router
const router = new Router(); // Create Router object
const userRouter = require('./userRouter'); // Import userRouter object
const deviceRouter = require('./deviceRouter'); // Import deviceRouter object
const brandRouter = require('./brandRouter'); // Import brandRouter object
const typeRouter = require('./typeRouter'); // Import typeRouter object

router.use('/user', userRouter); // Add userRouter object to router object
router.use('/device', deviceRouter); // Add deviceRouter object to router object
router.use('/brand', brandRouter); // Add brandRouter object to router object
router.use('/type', typeRouter); // Add typeRouter object to router object

module.exports = router; // Export router object
