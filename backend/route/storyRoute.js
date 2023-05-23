const express = require("express");
const{
createStory
} =require("../controllers/storyController");

const router = express.Router();
router.route("/create").post(createStory);



module.exports = router;