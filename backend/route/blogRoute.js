const express = require("express");
const {
blogCreate,
getAllBlog,
deleteBlog
} = require("../controllers/blogController")

const router = express.Router();
router.route("/create").post(blogCreate);
router.route("/all").get(getAllBlog);
router.route("/:id").delete(deleteBlog)


module.exports = router;