const express = require("express");
const router = express.Router();

module.exports = (User, Chat, Proposal, bcrypt) => {

    //Get minimal info about proposals for the "browse proposals" page
    //See GET /users for comments because it's the same concepts
     router.get("/", async (req, res) => {

          const {filterInput, sortInput} = req.body;
          
          if (filterInput.title) {
               filterInput.title = { "$regex": filterInput.title, "$options": "i" }
          }
          
          if  (filterInput.seeking) {
               filterInput.seeking = {$all : filterInput.seeking}
          }
          
          //Filter only for active proposals
          filterInput.status = "Active";
          
          const fieldsToReturn = {title: 1, author: 1, createdAt: 1, seeking: 1}
          
          Proposal
          .find(filterInput, fieldsToReturn) 
          .sort(sortInput)
          .then((proposalData) => res.json(proposalData))
          .catch(dbError => res.status(500).json({error: dbError.message}))


    })

    //View a specific proposal on its own page
    router.get("/:proposalId", async (req, res) => {
        const {proposalId} = req.params;
         //TODO: 


    })

    //Create a new proposal
    router.post("/", async (req, res) => {
         //TODO: 
    
    })

    //Edit proposal (change to active/inactive, or change content details)
    router.patch("/:proposalId", async (req, res) => {
         //TODO: 

    })

    //Permanently delete a proposal
    router.delete("/:proposalId", async (req, res) => {
         //TODO: 

    })

        

    return router;

};