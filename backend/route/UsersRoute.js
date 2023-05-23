const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
  deleteUser,
  getAllUser
} = require("../controllers/usersController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

//user registration
router.route("/").post(registerUser);

//post email and password auth
router.post("/login", authController);

//get user profile Private Route
router
  .route("/profile")
  .get( getUserProfile)
  .put(protect, updateUserProfile);
  
router.route("/all").get(getAllUser);
router.route("/:id").delete(deleteUser);

module.exports = router;