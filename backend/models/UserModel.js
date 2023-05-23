const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
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
  title:{
    type:String,
    required:true,
    default:"Team Member" 
  },
  roll:{
    type:String,
    required:true,
    default:"0000"
  },
  address:{
   type:String,
   required:true
  },
  birth:{
    type:String,
    required:true
  },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
  };
  
  //middlware for password
  userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });

const User = mongoose.model("User", userSchema);
module.exports = User;