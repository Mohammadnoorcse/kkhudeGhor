const mongoose = require("mongoose");

const storySchema = mongoose.Schema(
    {
      name: {
        type: String,
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
      images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
    // where: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Where",
    //     required: true,
    //   },
   
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "User",
    //     required: true,
    //   },
    
    },
    {
      timestamps: true,
    }
  );

const Story = mongoose.model("Story", storySchema);
module.exports = Story;