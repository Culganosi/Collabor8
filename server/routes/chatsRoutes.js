

const express = require("express");
const router = express.Router();

module.exports = (User, Chat, Proposal, bcrypt) => {

    //Get chat history
    router.get("/:chatId", async (req, res) => {
       const chatId = req.params.chatId;
       const chatHistory = await Chat.findById(chatId, {"__v": 0});
       res.json(chatHistory);
    })

    //Add new messages to the chat
    router.patch("/:chatId", async (req, res) => {
         //TODO: 

    })


    return router;

};