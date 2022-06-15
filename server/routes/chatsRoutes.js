

const express = require("express");
const router = express.Router();

module.exports = (User, Chat) => {

    //Get chat history
    router.get("/:chatId", async (req, res) => {
       const chatId = req.params.chatId;
       const chatHistory = await Chat.findById(chatId, {"__v": 0});
       res.json(chatHistory);
    })

    router.post("/", async (req, res) => {

        const authorId = req.session.userId;

        //Create a new chat and put it in the database
        const {recipientId, firstMessageText} = req.body;
        const newChat = new Chat({
            participants: [authorId, recipientId],
            messages: [{
                author: authorId,
                text: firstMessageText,
                sentAt: Date.now()
            }],
            lastMessageAt: Date.now()
        })

        const insertedChat = await newChat.save();
        
        //Put the ID of this chat in the data of the participants
        const author = await User.findById(authorId)
        const recipient = await User.findById(recipientId)

        author.chats.push(insertedChat._id)
        recipient.chats.push(insertedChat._id)

        await author.save()
        await recipient.save()

        res.status(201).json({message: "success", chatId: insertedChat._id})
    })

    //Add new messages to the chat
    router.patch("/:chatId", async (req, res) => {

        const author = req.session.userId;

        const {text} = req.body;

         //TODO: Verify author is authenticated (+ exists in DB?)
        const targetChat = await Chat.findById(req.params.chatId)

        // //Verify author is a participant of this chat
        if (!targetChat.participants.includes(author)) {
            return res.status(404).json({message: "The author of the message must be a participant of the chat"})
        }

        targetChat.messages.push({author, text, sentAt: Date.now()})
        targetChat.lastMessageAt = Date.now();

        await targetChat.save();

        return res.status(200).json({message: "success"})


    })

    //For when the user enters the chat and sees a list of all their previous chats
    router.get('/self/chat-previews', async (req, res) => {

        const userId = req.session.userId;

        const chatPreviews = []

        const targetUserChats = await Chat.find({participants : userId}).sort("-lastMessageAt")

        //Process each chat into a chat preview and add it the list
        for (let chatId of targetUserChats){
            const chatData = await Chat.findById(chatId)
            
            //Don't send the entire chat, only get the info needed for preview
            const lastMessage = chatData.messages[chatData.messages.length - 1];
            const partners = chatData.participants.filter(participant => {
                //Exclude the user who views their chat previews from this list
                //!== does not work since IDs are not primitives
                return (!participant.equals(userId))
            })

            const chatPreview = {
                lastMessage,
                partners,
                _id: chatData._id,
            }
            chatPreviews.push(chatPreview)
        }
        
        res.json(chatPreviews)

    });



    return router;

};