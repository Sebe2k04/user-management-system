const express = require('express');
const { getAllRoles, addRole, updateRole, deleteRole } = require('../controllers/roleController');

const router = express.Router();

router.get('/', getAllRoles);
router.post('/', addRole);
router.put('/:id', updateRole);
router.delete('/:id', deleteRole);

module.exports = router;
