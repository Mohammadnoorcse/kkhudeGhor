const express = require("express");
const {
deleteSchool,
getAllSchool,
registerSchool
} = require ("../controllers/whereController");

const router = express.Router();

//user registration
router.route("/").post(registerSchool);
router.route("/all").get(getAllSchool);
router.route("/:id").delete(deleteSchool);

module.exports = router;