

const express = require("express");
const router = express.Router();

module.exports = (User, Chat, Proposal, bcrypt) => {

    //Get chat history
    router.get("/", async (req, res) => {
       // const chatId = req.params.chatId;
    })


    return router;

};