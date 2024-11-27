const express = require('express');
const { getAllUsers, addUser,getUser, updateUser, deleteUser } = require('../controllers/userController');
const multer = require('multer');
const { protect } = require('../middlewares/authMiddleware');
const upload = multer({ dest: 'uploads/' }); // Use Cloudinary for storage

const router = express.Router();

router.get('/', getAllUsers);
router.get('/me',protect, getUser);
router.post('/', upload.single('profileImage'), addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
