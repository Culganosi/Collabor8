//import packages
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

//import schemas for each collection of documents
const Customer = require("./db/schema/customer");


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


app.post("/customer", async (req, res) => {

    const newCustomer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    Customer.create(newCustomer)
    .then(() => {
        res.send("Customer added")
    })
    .catch(err => {
        // console.log("Error: " + err);
        res.send(err)
    })

})


app.get("/customers", async (req, res) => {
    Customer.find({}, (err, result) => {
        res.send(result.map(customer => customer.lastName))
    })
})



app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
})