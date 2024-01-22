const ApiError = require('../error/ApiError');

class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async check(req, res, next) {
    const { id } = req.query; // Get query from request

    if (!id) {
      return next(ApiError.badRequest('Id is not defined'));
    }

    res.json(id); // Send query back to client
  }
}

module.exports = new UserController(); // Export UserController object
