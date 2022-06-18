const express = require("express");
const router = express.Router();

module.exports = (User, Proposal) => {


     

    //Get minimal info about proposals for the "browse proposals" page
    //See GET /users for comments because it's the same concepts
     router.get("/", async (req, res) => {

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
          console.log(filterInput)
          //Filter only for active proposals
          if(filterInput) {
               filterInput.status = "Active";
          }

          const fieldsToReturn = {title: 1, author: 1, createdAt: 1, seeking: 1, shortDescription: 1, image: 1}

          Proposal
          .find(filterInput, fieldsToReturn) 
          .sort(sortInput)
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

          if(!req.session.userId) res.status(403).json({message: "You're not logged in"})
          
          const userId = req.session.userId;
          const selfProposals = await Proposal.find({author: userId}, {description: 0})
          res.status(200).json(selfProposals)
     })


    //View a specific proposal on its own page
    router.get("/:proposalId", async (req, res) => {
          const targetProposal = await Proposal.findById(req.params.proposalId, {"__v": 0})
          res.json(targetProposal)
    })

    //Create a new proposal and add it to the list of the authors either active or inactive proposals
    router.post("/", async (req, res) => {
          const inputInfo = req.body

          if(!req.session.userId) res.status(403).json({message: "You must be logged in to post"})

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

          return res.status(201).json({message: "successs", proposal: insertedProposal})

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