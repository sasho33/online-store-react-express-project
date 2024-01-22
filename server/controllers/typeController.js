const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
  async create(req, res) {
    const { name } = req.body; // Get name from request body
    const type = await Type.create({ name }); // Create new type
    return res.json(type); // Send type back to client
  }
  async getAll(req, res) {
    const types = await Type.findAll(); // Get all types
    return res.json(types); // Send types back to client
  }
}

module.exports = new TypeController(); // Export TypeController object
