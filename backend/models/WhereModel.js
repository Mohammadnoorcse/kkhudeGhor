const mongoose = require("mongoose");

const whereSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    
    },
   
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    
    },
    {
      timestamps: true,
    }
  );

const Where = mongoose.model("Where", whereSchema);
module.exports = Where;