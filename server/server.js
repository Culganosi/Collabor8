//import packages
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session');
const cors = require('cors');
const socketio = require('socket.io')
const http = require('http')

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

//----ADD SOCKETS

const server = http.createServer(app);

//For newer versions of the socketio package: whitelist origin and methods!
const io = socketio (server, {
	cors: {
		origin: "http://localhost:3000", //The front-end client
		methods: ["GET", "POST"]
}});



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


  

  io.on ('connection', (socket) => {
	console.log("Someone has connected");
	console.log(socket) // prints details about the connection
});




///----ROUTER TO OTHER ROUTES


//-----Redirect to routes and pass them things imported above
app.use("/chats", chatsRoutes(User, Chat))
app.use("/auth", authRoutes(User, bcrypt))
app.use("/options", optionsRoutes(Option))
app.use("/proposals", proposalsRoutes(User, Proposal))
app.use("/users", usersRoutes(User))


//----The home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Collab||8 server! 🎉",
        "user routes": [
            "GET /users",
            "GET /users/:userId",
            "GET /users/self",
            "PATCH /users/userId",         
        ],
        "chat routes": [
            "GET /chats/:chatId",
            "GET /chats/self/chat-previews",
            "PATCH /chats/:chatId", 
        ],
        "proposal routes": [
            "GET /proposals",
            "GET /proposals/:proposalId",
            "POST /proposals",
            "PATCH /proposals",
            "DELETE /proposals/:proposalId",
        ],
        "options route": [ "GET /options"],
        "authentication routes": [
            "POST /auth/register",
            "POST /auth/in",
            "POST /auth/out",
        ]
    })
})




server.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
})