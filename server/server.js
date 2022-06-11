//import packages
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
require('dotenv').config()




//import schemas for each collection of documents
const User = require("./db/schema/01-users");

//Connect to database - the access string is imported from .env
mongoose
.connect(process.env.DB_CONNECTION_STRING)
.then(() => {console.log("Connected to database")})
.catch((err) => {console.log("Error: " + err)});

//Store connection to database
const db = mongoose.connection;


//----------Start the app
const PORT = 3001;
const app = express()
app.use(express.json()) //Same purpose as body parser


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Collab||8 server! 🎉",
        routes: [
            "GET /users",
            "GET /chats",
        ]
    
    })
})


//Registration / creating a new user
//--Creates a new user in the database [x]
//--Logs the user into a session []
app.post("/users", async (req, res) => {
    const newUser = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        userhandle: req.body.userhandle
    })
    User.create(newUser)
    .then(() => {

        //Create cookie session here

        res.status(200).json({message: "success", error: null})
    })
    .catch(dbError => {
        console.log(dbError.message)
        if (dbError.code === 11000){
            res.status(400).json({message: "failure", error: "An account with this email already exists"})
        } else {
            res.status(400).json({message: "failure", error: dbError.message})
        }
    })
})


//Edit user information (also works for filling out the profile after registration)
app.patch("/users", async (req, res) => {
})




app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
})