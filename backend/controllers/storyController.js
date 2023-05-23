const Story = require("../models/StoryModel");
const asyncHandler = require("express-async-handler");
const cloudinary = require("../utils/cloudinary")


const createStory= asyncHandler(async(req,res)=>{
  


     // for admin push images in cloudinary

  let images = []
  if (typeof req.body.images === 'string') {
      images.push(req.body.images)  // for only one image
  } else {
      images = req.body.images // if multiple images then else will be executed
  }

  let imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.uploader.upload(images[i], {
          folder: 'avatars'
      });

      imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url
      })
  }

  req.body.images = imagesLinks
  // req.body.user = req.user.id;

  const store = await Story.create(req.body);

  res.status(201).json({
    success: true,
    store,
  });
})

module.exports ={
    createStory
}