

const express = require("express");
const router = express.Router();

module.exports = (User, bcrypt) => {

    //Login
    router.post("/in", async (req, res) => {

          //---Authenticate

          const {userhandle, password} = req.body;
          if (!userhandle || !password ) return res.status(400).json({message: "Incomplete input"})

          //Find the user by name, return error if DNE
          const targetUser = await User.findOne({userhandle}, {"__v": 0})
          if (!targetUser) return res.status(400).json({message: "A user with this handle does not exist"})
          
          //Evaluate password, return error if incorrect
          if (!bcrypt.compareSync(password, targetUser.password)) {
               return res.status(403).json({message: "Wrong password"});
          }

          //Give the user a cookie
          req.session.userId = targetUser._id;

          //On successful login, give the user all info about their own profile
          res.status(200).json(targetUser)

    })

    //Logout
    router.post("/out", (req, res) => {
          req.session = null;
          res.status(200).json({message: "success"})
    })

        //Registration / creating a new user
    //--Creates a new user in the database and logs the user into a cookie session
     router.post("/register", async (req, res) => {

     const newUser = new User({
         email: req.body.email,
         password: bcrypt.hashSync(req.body.password, 10),
         userhandle: req.body.userhandle
     })
     User.create(newUser)
     .then((insertedUser) => {

         //Give the user a cookie
         req.session.userId = insertedUser._id;

         //On successful login, give the user all info about their own profile
         res.status(201).json(insertedUser)

     })
     .catch(dbError => {
         if (dbError.code === 11000){
             let problemInput = "email"
             if (dbError.keyValue.userhandle) problemInput = "userhandle"
             res.status(400).json({message: `An account with this ${problemInput} already exists`})
         } else {
             res.status(500).json({message: dbError.message})
         }
     })
     })

    return router;

};