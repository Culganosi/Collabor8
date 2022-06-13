

const express = require("express");
const router = express.Router();

module.exports = (Option) => {

    //Get chat history
    router.get("/", async (req, res) => {
       // const chatId = req.params.chatId;
       const optionData = await Option.find({})

       const polishedData = {}
       optionData.forEach(option => {
            polishedData[option.title] = option.data
       });

       res.json(polishedData)


    })


    return router;

};