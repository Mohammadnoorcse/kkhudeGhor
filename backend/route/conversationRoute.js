const express = require("express");
const{
allConversation,
getConversation,
newConversation
} = require( "../controllers/conversationController");
const router = express.Router();

//getUserOrder
router.route("/").post(newConversation);
router.route("/:userId").get(getConversation);
router.route("/find/:firstUserId/:secondUserId").get(allConversation);

module.exports = router;