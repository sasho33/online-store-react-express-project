const { Brand } = require('../models/models'); // Import Brand model

class BrandController {
  async create(req, res) {
    const { name } = req.body; // Get name from request body
    const brand = await Brand.create({ name }); // Create new brand
    return res.json(brand); // Send brand back to client
  }
  async getAll(req, res) {
    const brand = await Brand.findAll(); // Get all brand
    return res.json(brand); // Send brand back to client
  }
}

module.exports = new BrandController(); // Export TypeController object
