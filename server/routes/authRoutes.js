

const express = require("express");
const router = express.Router();

module.exports = (User, Chat, Proposal, bcrypt) => {

    //Login
    router.post("/in", async (req, res) => {

          const {userhandle, password} = req.body;
          if (!userhandle || !password ) return res.status(400).json({message: "Incomplete input"})

          //Find the user by name, return error if DNE
          const targetUser = await User.findOne({userhandle}, {password: 1})
          if (!targetUser) return res.status(400).json({message: "A user with this handle does not exist"})
          
          //Evaluate password, return error if incorrect
          if (!bcrypt.compareSync(password, targetUser.password)) {
               return res.status(403).json({message: "Wrong password"});
          }


          //Note: password is encrypted!

          res.json(targetUser)

    })

    //Logout
    router.post("/in", async (req, res) => {
         //TODO: 
        
    })


    //---Add dummy routes after

    // GET auth/username
    // GET auth/out


    return router;

};