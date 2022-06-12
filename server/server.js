//import packages
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
require('dotenv').config()

//import schemas for each collection of documents
const User = require("./db/schema/01-users");
const Proposal = require("./db/schema/02-proposals");
const Chat = require("./db/schema/03-chats");
const Option = require("./db/schema/04-options");

//import routes
const usersRoutes = require("./routes/users")

//Connect to database - the access string is imported from .env
mongoose
.connect(process.env.DB_CONNECTION_STRING)
.then(() => {console.log("Connected to database")})
.catch((err) => {console.log("Error: " + err)});


//----------Start the app
const PORT = 3001;
const app = express()
app.use(express.json()) //Same purpose as body parser, lets server accept JSON as a req body


//-----Redirect to routes and pass them the database schemas
app.use("/users", usersRoutes(User, Chat, Proposal))



//----The home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Collab||8 server! 🎉",
        routes: [
            "GET /users",
            "GET /users/:userId",
            "GET /users/:userId/chat-previews",
            "POST /users",
            "PATCH /users",
        ]
    })
})




app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
})