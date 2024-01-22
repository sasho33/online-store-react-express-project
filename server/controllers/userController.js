const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken module
const { User, Basket } = require('../models/models');

const generateJwt = (id, email, role) => {
  return jwt.sign(
    {
      id,
      email,
      role,
    },
    process.env.SECRET_KEY,
    { expiresIn: '24h' },
  );
};

class UserController {
  async registration(req, res) {
    const { email, password, role } = req.body; // Get email, password, role from request body
    if (!email || !password) {
      return next(ApiError.badRequest('Incorrect email or password'));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest('User with this email already exists'));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, password: hashPassword, role }); // Create new user
    const basket = await Basket.create({ userId: user.id }); // Create new basket for user with id = user.id
    const token = generateJwt(user.id, user.email, user.role); // Generate jwt token for user with id = user.id

    res.json({ token }); // Send token to client
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal('User with this email does not exist'));
    }
    const comparePassword = bcrypt.compareSync(password, user.password); // Compare password from request body with password from database
    if (!comparePassword) {
      return next(ApiError.internal('Incorrect password')); // Return error if passwords do not match
    }
    const token = generateJwt(user.id, user.email, user.role); // Generate jwt token for user with id = user.id
    return res.json({ token }); // Send token to client
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role); // Generate jwt token for user who constantly logged in
    return res.json({ token }); // Send token to client
  }
}

module.exports = new UserController(); // Export UserController object
