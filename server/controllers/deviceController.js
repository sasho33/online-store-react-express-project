const uuid = require('uuid');
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');
class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body; // Get name, price, brandId, typeId, info from request body
      const { img } = req.files; // Get img from request files
      let fileName = uuid.v4() + '.jpg'; // Create unique file name
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({ name, price, brandId, typeId, img: fileName }); // Create new device

      if (info) {
        info = JSON.parse(info); // Parse info to JSON
        info.forEach((i) => [
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          }),
        ]);
      }

      return res.json(device);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }
  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query; // Get brandId, typeId from request body
    page = page || 1; // Get page number
    limit = limit || 9; // Get limit number
    let offset = page * limit - limit; // Get offset number
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit, offset });
    }
    return res.json(devices);
  }
  async getOne(req, res) {
    const { id } = req.params; // Get id from request params
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: 'info' }],
    }); // Find one device by id
    return res.json(device);
  }
}

module.exports = new DeviceController(); // Export TypeController object
