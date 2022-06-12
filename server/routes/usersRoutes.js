const express = require("express");
const router = express.Router();

module.exports = (User, Chat, Proposal, bcrypt) => {

    //Get basic (incomplete) info on all users for the browse users page
    router.get('/', async (req, res) => {
        const {filterInput, sortInput} = req.body;
        const fieldsToReturn = {userhandle: 1, avatar: 1, bio: 1, skills: 1, createdAt: 1}

        //If the client included a skills list as a filtering parameter
        //Modify so that the skills must INCLUDE the input but don't need to be an identical list
        //https://stackoverflow.com/questions/18148166/find-document-with-array-that-contains-a-specific-value
        if  (filterInput.skills) {
            filterInput.skills = {$all : filterInput.skills}
        }

        User
        .find(filterInput, fieldsToReturn) //Return all but only include these fields
        .sort(sortInput)
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

    //For when the user enters the chat and sees a list of all their previous chats
    router.get('/:userId/chat-previews', async (req, res) => {

        const userId = req.params.userId;
     
        const chatPreviews = []

        const targetUser = await User.findOne({_id: userId}, {chats: 1})

        //Process each chat into a chat preview and add it the list
        for (let chatId of targetUser.chats){
            const chatData = await Chat.findById(chatId).sort("lastMessageAt")

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
            }
            chatPreviews.push(chatPreview)
        }

        
        res.json(chatPreviews)

    });

    
    //Registration / creating a new user
    //--Creates a new user in the database [x]
    //--Logs the user into a session []
    router.post("/", async (req, res) => {

        const newUser = new User({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            userhandle: req.body.userhandle
        })
        User.create(newUser)
        .then(() => {
            //Create sessions here
            res.status(200).json({message: "success", error: null})
        })
        .catch(dbError => {
            if (dbError.code === 11000){
                let problemInput = "email"
                if (dbError.keyValue.userhandle) problemInput = "userhandle"
                res.status(400).json({error: false, message: `An account with this ${problemInput} already exists`})
            } else {
                res.status(500).json({error: true, message: dbError.message})
            }
        })
    })

    //Edit user information (also works for filling out the profile after registration)
    router.patch("/:userId", async (req, res) => {
    })




    return router;
}