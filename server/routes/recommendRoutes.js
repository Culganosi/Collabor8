

const express = require("express");
const router = express.Router();

module.exports = (User, Proposal) => {

    //Get proposals that require a role that the user calling this has 
    router.get("/proposals", async (req, res) => {
        if (!req.session.userId) res.status(403).json({message: "You are not logged in"})

        const userId = req.session.userId;
        const targetUser = await User.findById(userId)
        const userRole = targetUser.role

        const recommendedProposals = await Proposal.find({seeking: userRole, author: { "$ne": userId }, status: "Active" })

        res.status(200).json(recommendedProposals)

    })

    return router;

};