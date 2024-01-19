class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async check(req, res) {
    const query = req.query; // Get query from request
    res.json(query); // Send query back to client
  }
}

module.exports = new UserController(); // Export UserController object
