
const asyncHandler= require("express-async-handler");
const Conversation = require("../models/ConversationModel");

const newConversation = asyncHandler(async(req,res)=>{

    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
      });
    
      try {
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
      } catch (err) {
        res.status(500).json(err);
      }


});
const getConversation = asyncHandler(async(req,res)=>{

    try {
        const conversation = await Conversation.find({
          members: { $in: [req.params.userId] },
        });
        res.status(200).json(conversation);
      } catch (err) {
        res.status(500).json(err);
      }


});

const allConversation = asyncHandler(async(req,res)=>{

    try {
        const conversation = await Conversation.findOne({
          members: { $all: [req.params.firstUserId, req.params.secondUserId] },
        });
        res.status(200).json(conversation)
      } catch (err) {
        res.status(500).json(err);
      }


});



  module.exports = { newConversation,allConversation,getConversation };