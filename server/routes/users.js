const express = require("express");
const router = express.Router();

module.exports = (User, Chat, Proposal) => {

    //Get basic (incomplete) info on all users for the browse users page
    router.get('/', async (req, res) => {
        User
        .find({}, {userhandle: 1, avatar: 1, bio: 1, skills: 1, createdAt: 1}) //Return all but only include these fields
        .sort("-createdAt") //Sort by newest registered first
        .then((userData) => res.json(userData))
        .catch(dbError => res.status(500).json({error: dbError.message}))
    })

    //Get detailed info on one user for the individual profile page
    router.get('/:userId', async (req, res) => {
        const userId = req.params.userId;

        const exclusionParams = {chats: 0, inactiveProposals: 0}

        //Replace this with: if the request is coming from a logged in user about themselves
        //Then let them see the archived proposals too
        if(false) delete exclusionParams.inactiveProposals;

        const userData = await User.findOne({_id: userId}, exclusionParams).sort("-createdAt")
        res.json(userData)
    })


    router.get('/:userId/chatPreviews', async (req, res) => {

        const userId = req.params.userId;
     
        const chatPreviews = []

        const targetUser = await User.findOne({_id: userId}, {chats: 1}).sort("-createdAt")

        //Process each chat into a chat preview and add it the list
        for (let chatId of targetUser.chats){
            const chatData = await Chat.findOne({_id: chatId});

            //Don't send the entire chat, only get the info needed for preview
            const lastMessage = chatData.messages[chatData.messages.length - 1];
            const partners = chatData.participants.filter(participant => {
                //Exclude the user who views their chat previews from this list
                //!== does not work since IDs are not primitives
                return (!participant.equals(targetUser._id))
            })

            const chatPreview = {
                lastMessage,
                partners,
                _id: chatData._id,
                createdAt: chatData.createdAt,
               
            }
            chatPreviews.push(chatPreview)
        }

        
        res.json(chatPreviews)

    });


    return router;
}