const express = require('express');
const {
  getAllPermissions,
  addPermission,
  updatePermission,
  deletePermission,
} = require('../controllers/permissionController');

const router = express.Router();

router.get('/', getAllPermissions); // Get all permissions
router.post('/', addPermission); // Add a new permission
router.put('/:id', updatePermission); // Update an existing permission
router.delete('/:id', deletePermission); // Delete a permission

module.exports = router;
