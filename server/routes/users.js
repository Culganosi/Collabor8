const express = require("express");
const router = express.Router();

module.exports = (User) => {

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
        if(false) delete exclusionParams.inactiveProposals

        const userData = await User.find({_id: userId}, exclusionParams).sort("-createdAt")
        res.json(userData)
    })


    return router;
}