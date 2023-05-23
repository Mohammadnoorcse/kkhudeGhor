const express = require("express");
const{
getMessage,
newMessage
} = require( "../controllers/messageController");
const router = express.Router();

//getUserOrder
router.route("/").post(newMessage);
router.route("/:conversationId").get(getMessage);

module.exports = router;