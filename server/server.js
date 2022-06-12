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
const chatsRoutes = require("./routes/chatsRoutes")
const logRoutes = require("./routes/logRoutes")
const optionsRoutes = require("./routes/optionsRoutes")
const proposalsRoutes = require("./routes/proposalsRoutes")
const usersRoutes = require("./routes/usersRoutes")

//Connect to database - the access string is imported from .env
mongoose
.connect(process.env.DB_CONNECTION_STRING)
.then(() => {console.log("Connected to database")})
.catch((err) => {console.log("Error: " + err)});


//----------Start the app
const PORT = 3001;
const app = express()
app.use(express.json()) //Same purpose as body parser, lets server accept JSON as a req body

//-----Redirect to routes and pass them things imported above
app.use("/chats", chatsRoutes(User, Chat, Proposal, bcrypt))
app.use("/log", logRoutes(User, Chat, Proposal, bcrypt))
app.use("/options", optionsRoutes(Option))
app.use("/proposals", proposalsRoutes(User, Chat, Proposal, bcrypt))
app.use("/users", usersRoutes(User, Chat, Proposal, bcrypt))


//----The home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Collab||8 server! 🎉",
        routes: [
            "GET /users",
            "GET /users/:userId",
            "GET /users/:userId/chat-previews",
            "POST /users",
            "GET /options"
        ]
    })
})




app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
})