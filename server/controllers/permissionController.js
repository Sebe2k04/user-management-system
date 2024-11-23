const Permission = require('../models/permissionSchema');
const Role = require('../models/roleSchema');

exports.getAllPermissions = async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.json(permissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addPermission = async (req, res) => {
  try {
    const { name, description } = req.body;
    const existingPermission = await Permission.findOne({ name });

    if (existingPermission) {
      return res.status(400).json({ message: 'Permission already exists' });
    }

    const permission = new Permission({ name, description });
    await permission.save();
    res.status(201).json(permission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updatePermission = async (req, res) => {
  try {
    const { name, description } = req.body;
    const permission = await Permission.findById(req.params.id);

    if (!permission) {
      return res.status(404).json({ message: 'Permission not found' });
    }

    permission.name = name || permission.name;
    permission.description = description || permission.description;

    await permission.save();
    res.json(permission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deletePermission = async (req, res) => {
  try {
    const permission = await Permission.findById(req.params.id);

    if (!permission) {
      return res.status(404).json({ message: 'Permission not found' });
    }


    const rolesWithPermission = await Role.find({ permissions: permission.name });

    if (rolesWithPermission.length > 0) {
      return res.status(400).json({
        message: 'Cannot delete permission. It is assigned to one or more roles.',
      });
    }

    await permission.remove();
    res.json({ message: 'Permission deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
