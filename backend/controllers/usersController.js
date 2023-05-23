const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const cloudinary = require("../utils/cloudinary")

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password,address,birth,image } = req.body;

  const result = await cloudinary.uploader.upload(image, {
    folder: "avatars",
    // width: 150,
    // crop: "scale",
  });
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User Already Exists!");
  }

  const user = await User.create({ name, email, password ,address,birth,
    image: {
      public_id: result.public_id,
      url: result.secure_url
  },
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image:user.image,
      isAdmin: user.isAdmin,
      title:user.title,
      roll:user.roll,
      address:user.address,
      birth:user.birth,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

const authController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image:user.image,
      title:user.title,
      roll:user.roll,
      address:user.address,
      birth:user.birth,

      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const userId = req.query.userId;
  const user = await User.findById(userId);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      image:user.image,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});
const getAllUser = asyncHandler(async (req, res) => {
  const user = await User.find();
  if (user) {
    res.json({
      // _id: user._id,
      // name: user.name,
      // email: user.email,
      // isAdmin: user.isAdmin,
      user
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateUser = await user.save();
    res.json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
      token: generateToken(updateUser._id),
    });
  } else {
    res.status(404);
    throw new Error("user Not Found!");
  }
});
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {

    const imageId = user.image.public_id;
    await cloudinary.uploader.destroy(imageId);
    await user.remove();

    res.json("User Deleted Successfully");
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});


module.exports = {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getAllUser,
  deleteUser
};
