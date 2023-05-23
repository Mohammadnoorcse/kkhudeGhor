const asyncHandler = require("express-async-handler");
const cloudinary = require("../utils/cloudinary");
const Where = require("../models/WhereModel")

const registerSchool = asyncHandler(async (req, res) => {
    const { name, address, description,user,image } = req.body;
  
    const result = await cloudinary.uploader.upload(image, {
      folder: "avatars",
      // width: 150,
      // crop: "scale",
    });
    const schoolExist = await Where.findOne({ name });
    if (schoolExist) {
      res.status(400);
      throw new Error("User Already Exists!");
    }
  
    const where = await Where.create({ name, address, description,user,
      image: {
        public_id: result.public_id,
        url: result.secure_url
    },
    });
    if (user) {
      res.status(201).json({
        _id: where._id,
        name: where.name,
        address: where.address,
        image:where.image,
       
        description:where.description,
        user:where.user
       
      });
    } else {
      res.status(404);
      throw new Error("User Not Found");
    }
  });

  const deleteSchool = asyncHandler(async (req, res) => {
    const where = await Where.findById(req.params.id);
    if (where) {
  
      const imageId = where.image.public_id;
      await cloudinary.uploader.destroy(imageId);
      await where.remove();
  
      res.json("where Deleted Successfully");
    } else {
      res.status(404);
      throw new Error("where Not Found");
    }
  });
  const getAllSchool = asyncHandler(async (req, res) => {
    const where = await Where.find();
    if (where) {
      res.json({
        // _id: where._id,
        // name: where.name,
        // email: where.email,
        // isAdmin: where.isAdmin,
        where
      });
    } else {
      res.status(404);
      throw new Error("User Not Found");
    }
  });

  module.exports = {
    registerSchool,
    deleteSchool,
    getAllSchool
  };