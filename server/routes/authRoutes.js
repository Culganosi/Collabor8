

const express = require("express");
const router = express.Router();

module.exports = (User, bcrypt, jwt) => {

    //Login
    router.post("/in", async (req, res) => {

          //---Authenticate

          const {userhandle, password} = req.body;
          if (!userhandle || !password ) return res.status(400).json({message: "Incomplete input"})

          //Find the user by name, return error if DNE
          const targetUser = await User.findOne({userhandle}, {password: 1})
          if (!targetUser) return res.status(400).json({message: "A user with this handle does not exist"})
          
          //Evaluate password, return error if incorrect
          if (!bcrypt.compareSync(password, targetUser.password)) {
               return res.status(403).json({message: "Wrong password"});
          }

          //----Authorize

          const client = {userId: targetUser._id};

          const accessToken = jwt.sign(client, process.env.ACCESS_TOKEN_SECRET);

          res.status(200).json({accessToken})

    })

    //Logout
    router.post("/out", async (req, res) => {
         //TODO: 
        
    })


    //---Add dummy routes after

    // GET auth/username
    // GET auth/out

     function authenticateToken(req, res, next) {
          const authHeader = req.headers['authorization']
          const token = authHeader && authHeader.split(' ')[1]
          if(!token) return res.status(401).json({message: "No token"})

          jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, client) => {
               if (err) return res.status(403).json({message: "Invalid token"})
               req.client = client;
               next();
          })


     }





    return router;

};