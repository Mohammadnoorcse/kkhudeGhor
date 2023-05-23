const mongoose = require("mongoose");
const BlogSchema =  mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },

}, { timestamps: true });


const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;