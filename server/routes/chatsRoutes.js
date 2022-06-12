

const express = require("express");
const router = express.Router();

module.exports = (User, Chat, Proposal, bcrypt) => {

    //Get chat history
    router.get("/:chatId", async (req, res) => {
       const chatId = req.params.chatId;
       const chatHistory = await Chat.findById(chatId, {"__v": 0});
       res.json(chatHistory);
    })

    router.post("/", async (req, res) => {
        //TODO: think through pending chat scenario
    })

    //Add new messages to the chat
    router.patch("/:chatId", async (req, res) => {

        const {author, text} = req.body;

         //TODO: Verify author is authenticated (+ exists in DB?)
        const targetChat = await Chat.findById(req.params.chatId)

        // //Verify author is a participant of this chat
        if (!targetChat.participants.includes(author)) {
            return res.status(404).json({message: "The author of the message must be a participant of the chat"})
        }

        targetChat.messages.push({author, text, sentAt: Date.now()})

        await targetChat.save();

        return res.status(200).json({message: "success"})


    })


    return router;

};