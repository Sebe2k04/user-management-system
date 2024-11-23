const express = require('express');
const { getAllUsers, addUser, updateUser, deleteUser } = require('../controllers/userController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Use Cloudinary for storage

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', upload.single('profileImage'), addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
