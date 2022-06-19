

const express = require("express");
const router = express.Router();

module.exports = (User, Proposal) => {

    //Get proposals that require a role that the user calling this has 
    router.get("/proposals", async (req, res) => {

        if (!req.session.userId) res.status(403).json({message: "You are not logged in"})
        const userId = req.session.userId;

        //Find the role of the user making the call
        const targetUser = await User.findById(userId)
        const userRole = targetUser.role

        //Find proposals that seek that role, are active, and the author is not the user making the call
        const recommendedProposals = await Proposal.find({seeking: userRole, author: { "$ne": userId }, status: "Active" }).limit(3)

        res.status(200).json(recommendedProposals)

    })


    router.get("/users", async (req, res) => {

        if (!req.session.userId) res.status(403).json({message: "You are not logged in"})
        const userId = req.session.userId;

        //Find all proposals where the user calling is the author
        const callersProposals = await Proposal.find({author: userId})

        //If the caller has no proposals, return an empty array immediately
        if (callersProposals.length==0) res.status(200).json([])

        //Make a list of all the roles the caller seeks
        const saughtRoles = []
        callersProposals.forEach(proposal => proposal.seeking.forEach(role => saughtRoles.push(role)))

        const saughtRoleFrequencies = {}
        for (let role of saughtRoles) {
            if (saughtRoleFrequencies[role]) {
                saughtRoleFrequencies[role] += 1;
            } else {
                saughtRoleFrequencies[role] = 1
            }
        }

        const uniqueRoles = Object.keys(saughtRoleFrequencies)

        function compareFrequency(a, b) {
            return saughtRoleFrequencies[b] - saughtRoleFrequencies[a];
        }
        
        uniqueRoles.sort(compareFrequency);

        //Query the list of users for people in those roles, prioritizing the most frequently saught
        let recommendedUsers = []
        //How many people to return for each saught role
        let limit = 1;
        if (uniqueRoles.length===1) {
            limit = 3
        } else if (uniqueRoles.length===2) {
            limit = 2;
        }

        for (let role of uniqueRoles) {
            const usersInRole = await User.find(
                {role, _id: {"$ne": userId}}, 
                {userhandle: 1, avatar: 1, role: 1, skills: 1, shortBio: 1, createdAt: 1}).limit(limit)
            console.log(role)
            console.log(usersInRole)
            recommendedUsers = recommendedUsers.concat(usersInRole)
        }

        res.status(200).json(recommendedUsers)

    })

    return router;

};