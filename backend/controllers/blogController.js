const Blog = require("../models/BlogModel");
const asyncHandler= require("express-async-handler");
const User = require("../models/UserModel")

const blogCreate = asyncHandler(async(req,res)=>{
const {title,description,user} = req.body;



const blog= await Blog.create({title,description,user})

if(blog){
    res.status(201).json({
        blog
        
        
    })
}else{
    res.status(404);
    throw new Error("User Not Found");
}
});

const getAllBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.find();
    if (blog) {
      res.json({
        // _id: user._id,
        // name: user.name,
        // email: user.email,
        // isAdmin: user.isAdmin,
        blog,
        

      });
    } else {
      res.status(404);
      throw new Error("User Not Found");
    }
  });

  const deleteBlog = asyncHandler(async(req,res)=>{
    const blog = await Blog.findById(req.params.id);
    if (blog) {

     
      await blog.remove();
  
      res.json("User Deleted Successfully");
    } else {
      res.status(404);
      throw new Error("User Not Found");
    }

  })

  module.exports = { blogCreate, getAllBlog,deleteBlog };