const express = require("express");
const router = express.Router();

module.exports = (User, Chat, Proposal, bcrypt) => {

    //Get minimal info about proposals for the "browse proposals" page
    //See GET /users for comments because it's the same concepts
     router.get("/", async (req, res) => {

          const {filterInput, sortInput} = req.body;
          
          if (filterInput?.title) {
               filterInput.title = { "$regex": filterInput.title, "$options": "i" }
          }
          
          //TODO: This is not right, it should return proposals that seek ANY of the skills listed, not ALL of them
          //Figure out how to do this but keep this for now
          //https://stackoverflow.com/questions/19648841/how-can-i-handle-array-intersection-in-find
          if  (filterInput?.seeking) {
               filterInput.seeking = {$all : filterInput.seeking}
          }
          
          //Filter only for active proposals
          filterInput.status = "Active";
          
          const fieldsToReturn = {title: 1, author: 1, createdAt: 1, seeking: 1, shortDescription: 1, image: 1}

          Proposal
          .find(filterInput, fieldsToReturn) 
          .sort(sortInput)
          .then((proposalData) => res.json(proposalData))
          .catch(dbError => res.status(500).json({error: dbError.message}))


    })

    //View a specific proposal on its own page
    router.get("/:proposalId", async (req, res) => {
          const targetProposal = await Proposal.findById(req.params.proposalId, {"__v": 0})
          res.json(targetProposal)
    })

    //Create a new proposal and add it to the list of the authors either active or inactive proposals
    router.post("/", async (req, res) => {
          const inputInfo = req.body

          //If no image added, add a default gradient
          //TODO: Storing images on our own server?
          if (!inputInfo?.image){
               inputInfo.image = "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/02/Usign-Gradients-Featured-Image.jpg"
          }

          const author = await User.findById(inputInfo.author)
          if (!author) {
               return res.status(404).json({message: "Invalid author ID"})
          }

          const newProposal = new Proposal({...inputInfo, createdAt: Date.now()})
          insertedProposal = await newProposal.save()

          if (!insertedProposal) {
               return res.status(500).json({message: error.message})
          }

          if (inputInfo.status === "Active") {    
               author.activeProposals.push(insertedProposal._id)
          } else {
               author.inactiveProposals.push(insertedProposal._id)
          }      

          await author.save();

          return res.status(201).json({message: "successs", proposalId: insertedProposal._id})

    })

    //Edit proposal (change to active/inactive, or change content details)
    //See Patch route for users for comments
    router.patch("/:proposalId", async (req, res) => {
          const inputFields = req.body;
          Proposal.updateOne({"_id": req.params.proposalId}, inputFields)
          .then(() => res.status(200).json({message: "success"}))
          .catch((error) => res.status(400).json({message: error.message}))
    })

    //Permanently delete a proposal
    router.delete("/:proposalId", async (req, res) => {
         Proposal.findByIdAndRemove(req.params.proposalId)
         .then(() => res.status(200).json({message: "success"}))
         .catch((error) => res.status(400).json({message: error.message}))
    })

    return router;

};