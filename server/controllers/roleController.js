const Role = require('../models/roleSchema');
const Permission = require('../models/permissionSchema');
exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.addRole = async (req, res) => {
    try {
      const { name, permissions } = req.body;
  
      const validPermissions = await Permission.find({ name: { $in: permissions } });
      if (validPermissions.length !== permissions.length) {
        return res.status(400).json({ message: 'Some permissions are invalid' });
      }
  
      const role = new Role({ name, permissions });
      await role.save();
      res.status(201).json(role);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  exports.updateRole = async (req, res) => {
    try {
      const { name, permissions } = req.body;
      const role = await Role.findById(req.params.id);
  
      if (!role) {
        return res.status(404).json({ message: 'Role not found' });
      }
  
      const validPermissions = await Permission.find({ name: { $in: permissions } });
      if (validPermissions.length !== permissions.length) {
        return res.status(400).json({ message: 'Some permissions are invalid' });
      }
  
      role.name = name || role.name;
      role.permissions = permissions || role.permissions;
  
      await role.save();
      res.json(role);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
// exports.addRole = async (req, res) => {
//   try {
//     const { name, permissions } = req.body;
//     const role = new Role({ name, permissions });
//     await role.save();
//     res.status(201).json(role);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.updateRole = async (req, res) => {
//   try {
//     const { name, permissions } = req.body;
//     const role = await Role.findById(req.params.id);

//     if (!role) return res.status(404).json({ message: 'Role not found' });

//     role.name = name || role.name;
//     role.permissions = permissions || role.permissions;

//     await role.save();
//     res.json(role);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

exports.deleteRole = async (req, res) => {
  try {
    await Role.findByIdAndDelete(req.params.id);
    res.json({ message: 'Role deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
