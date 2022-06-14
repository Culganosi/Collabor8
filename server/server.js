//import packages
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session');
const cors = require('cors');

require('dotenv').config()

//import schemas for each collection of documents
const User = require("./db/schema/01-users");
const Proposal = require("./db/schema/02-proposals");
const Chat = require("./db/schema/03-chats");
const Option = require("./db/schema/04-options");

//import routes
const chatsRoutes = require("./routes/chatsRoutes")
const authRoutes = require("./routes/authRoutes")
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


//Tell server to use cookies
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}));



//TODO:...==> DO THIS PROPERLY

//app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Origin", "https://localhost:3000");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  


//-----Redirect to routes and pass them things imported above
app.use("/chats", chatsRoutes(User, Chat))
app.use("/auth", authRoutes(User, bcrypt))
app.use("/options", optionsRoutes(Option))
app.use("/proposals", proposalsRoutes(User, Proposal))
app.use("/users", usersRoutes(User, Chat, bcrypt))


//----The home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Collab||8 server! 🎉",
        routes: [
            "GET /users",
            "GET /users/:userId",
            "GET /users/:userId/chat-previews",
            "PATCH /users/userId",
            "GET /chats/:chatId",
            "PATCH /chats/:chatId",
            "GET /proposals",
            "GET /proposals/:proposalId",
            "POST /proposals",
            "PATCH /proposals",
            "DELETE /proposals/:proposalId",
            "GET /options",
            "GET /auth/self",
            "POST /auth/register",
            "POST /auth/in",
            "POST /auth/out",
        ]
    })
})




app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
})