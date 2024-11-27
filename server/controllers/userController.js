const User = require('../models/userSchema');
const cloudinary = require('../config/cloudinary');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('role');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUser = async(req,res) => {
  const id = req.userId;
  try{
    const user = await User.find({_id:id}).select('-password')
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  }
  catch(err){
    res.status(400).json({
      message: err.message
    }
    )
  }
}

exports.addUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    let profileImage;

    if (req.file) {
      const uploadResponse = await cloudinary.uploader.upload(req.file.path);
      profileImage = uploadResponse.secure_url;
    }

    const user = new User({ name, email, password, role, profileImage });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, email, role, status } = req.body;
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;
    user.status = status || user.status;

    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
