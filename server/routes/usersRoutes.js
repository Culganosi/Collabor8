const express = require("express");
const router = express.Router();

module.exports = (User, Chat, bcrypt) => {

    //Get basic (incomplete) info on all users for the browse users page
    router.get('/', async (req, res) => {
        const {filterInput, sortInput} = req.body;
        
        //If the client included a userhandle or a role in the filtering parameter
        //Modify such that it will find anything where it is a substring, not only an exact match        
        //https://stackoverflow.com/questions/26814456/how-to-get-all-the-values-that-contains-part-of-a-string-using-mongoose-find
        if (filterInput?.userhandle) {
            filterInput.userhandle = { "$regex": filterInput.userhandle, "$options": "i" }
        }
        
        if (filterInput?.role) {
            filterInput.role = { "$regex": filterInput.role, "$options": "i" }
        }
        
        //If the client included a skills list as a filtering parameter
        //Modify so that the skills must INCLUDE the input but don't need to be an identical list
        //https://stackoverflow.com/questions/18148166/find-document-with-array-that-contains-a-specific-value
        if (filterInput?.skills) {
            filterInput.skills = {$all : filterInput.skills}
        }

        const fieldsToReturn = {userhandle: 1, avatar: 1, shortBio: 1, skills: 1, createdAt: 1}

        User
        .find(filterInput, fieldsToReturn) //Return all but only include these fields
        .sort(sortInput)
        .then((userData) => {
            
            //Make the data an object indexable by ID
            const rearrangedData = {};
            userData.forEach(user => {
                rearrangedData[user._id] = user;
            })

            res.json(rearrangedData)}
            
        )
        .catch(dbError => res.status(500).json({error: dbError.message}))
    })


    //Get info about the user who is logged in
    //Even though login and registration also return full self-info
    //This route can be called on every refresh so that client doesn't lose info stored in local memory on client-side
    //NOTE: This route must stay above the next one so that "self" is not interpreted as an ID
    router.get('/self', async (req, res) => {

        if (!req.session.userId) return res.status(403).json({message: "You are not logged in"})

         //Use the ID stored in the cookie to find user
        const selfUser = await User.findById(req.session.userId)

        if (selfUser) {
             return res.status(200).json(selfUser)
        } else {
             return res.status(404).json({message: "Not found"})
        }
   })

    //Get detailed info on one user for the individual profile page
    router.get('/:userId', async (req, res) => {

        const userData = await User.findById(req.params.userId, {"__v": 0}).sort("-createdAt")
        res.json(userData)
    })


    //For when the user enters the chat and sees a list of all their previous chats
    router.get('/:userId/chat-previews', async (req, res) => {
        const userId = req.params.userId;
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

    //Edit user information (also works for filling out the profile after registration)
    router.patch("/:userId", async (req, res) => {

        //All the things that have to be changed are in the request body
        const inputFields = req.body;

        //TODO: Figure out how to send image from file --> S3 storage --> URL to database

        //Find user by ID (via cookie) and update the fields provided
        User.updateOne({"_id": req.params.userId}, inputFields)
        .then(() => res.status(200).json({message: "success"}))
        .catch((error) => res.status(400).json({message: error.message}))

    })

    return router;
}