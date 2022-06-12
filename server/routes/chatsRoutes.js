

const express = require("express");
const router = express.Router();

module.exports = (User, Chat, Proposal, bcrypt) => {

    //Get chat history
    router.get("/:chatId", async (req, res) => {
       // const chatId = req.params.chatId;


    })

    //Add new messages to the chat
    router.patch("/:chatId", async (req, res) => {

    })


    return router;

};