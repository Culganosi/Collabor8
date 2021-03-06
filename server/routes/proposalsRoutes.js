const express = require("express");
const router = express.Router();

module.exports = (User, Proposal) => {


     

    //Get minimal info about proposals for the "browse proposals" page
    //See GET /users for comments because it's the same concepts
     router.get("/", async (req, res) => {
          console.log("In GET /proposals")

          //User must be logged in
          if (!req.session.userId) {
               return res.status(403).json({message: "You're not logged in"})
          }
          const selfId = req.session.userId;
          
          let {filterInput, sortInput} = req.body;

          if (!filterInput) {
               filterInput={}
          }
          if (filterInput?.title) {
               filterInput.title = { "$regex": filterInput.title, "$options": "i" }
          }
          
          //TODO: This is not right, it should return proposals that seek ANY of the skills listed, not ALL of them
          //Figure out how to do this but keep this for now
          //https://stackoverflow.com/questions/19648841/how-can-i-handle-array-intersection-in-find
          if  (filterInput.seeking) {
               filterInput.seeking = {$all : filterInput.seeking}
          }
          //Filter only for active proposals
          if(filterInput) {
               filterInput.status = "Active";
          }

           //Exclude proposals by the user who is logged in
           filterInput.author = {"$ne": selfId}

          const fieldsToReturn = {title: 1, author: 1, createdAt: 1, seeking: 1, shortDescription: 1, image: 1}

          Proposal
          .find(filterInput, fieldsToReturn) 
          .sort("-createdAt")
          .then((proposalData) => {

               //Make the data an object indexable by ID
               const rearrangedData = {};
               proposalData.forEach(proposal => {
                    rearrangedData[proposal._id] = proposal;
               })

               res.json(rearrangedData)
          })
          .catch(dbError => res.status(500).json({error: dbError.message}))


    })

     //Return all the proposals of the Self user, including inactive ones
     router.get('/self', async (req, res) => {
          console.log("In GET /proposals/self")

          if(!req.session.userId) {
               return res.status(403).json({message: "You're not logged in"})
          }
          
          const userId = req.session.userId;
          const selfProposals = await Proposal.find({author: userId}, {description: 0})
          return res.status(200).json(selfProposals)
     })

    //View a specific proposal on its own page
    router.get("/:proposalId", async (req, res) => {
          console.log("In GET /proposals/:id")

          const targetProposal = await Proposal.findById(req.params.proposalId, {"__v": 0})
          res.json(targetProposal)
    })

    //Create a new proposal and add it to the list of the authors either active or inactive proposals
    router.post("/", async (req, res) => {
          console.log("In POST /proposals")
          if(!req.session.userId) {
               return res.status(403).json({message: "You're not logged in"})
          }

          const inputInfo = req.body

          //We get the author from cookie info
          const authorId = req.session.userId;

          //If no image added, add a default gradient
          //TODO: Storing images on our own server?
          if (!inputInfo?.image){
               inputInfo.image = "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/02/Usign-Gradients-Featured-Image.jpg"
          }

          const author = await User.findById(authorId)
          if (!author) {
               return res.status(404).json({message: "Invalid author ID"})
          }

          const newProposal = new Proposal({...inputInfo, createdAt: Date.now(), author: authorId})
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

          return res.status(201).json({message: "successs", proposal: insertedProposal})

    })

    //Edit proposal (change to active/inactive, or change content details)
    //See Patch route for users for comments
    router.patch("/:proposalId", async (req, res) => {

          console.log("In PATCH /proposals/:id")

          const inputFields = req.body;
          Proposal.updateOne({"_id": req.params.proposalId}, inputFields)
          .then(() => res.status(200).json({message: "success"}))
          .catch((error) => res.status(400).json({message: error.message}))
    })

    //Permanently delete a proposal
    router.delete("/:proposalId", async (req, res) => {

          console.log("In DELETE /proposals/:id")

          const targetProposalId = req.params.proposalId

          const targetProposal = await Proposal.findById(targetProposalId)
          const proposalAuthorId = targetProposal.author

          const targetAuthor = await User.findById(proposalAuthorId)
          
          if (targetAuthor.activeProposals.includes(targetProposalId)) {
               const index = targetAuthor.activeProposals.indexOf(targetProposalId);
               targetAuthor.activeProposals.splice(index, 1)
               await targetAuthor.save()
          } 

          if (targetAuthor.inactiveProposals.includes(targetProposalId)) {
               const index = targetAuthor.inactiveProposals.indexOf(targetProposalId);
               targetAuthor.inactiveProposals.splice(index, 1)
               await targetAuthor.save()
          } 

         Proposal.findByIdAndRemove(targetProposalId)
         .then(() => res.status(200).json({message: "success"}))
         .catch((error) => res.status(400).json({message: error.message}))
    })




    return router;

};