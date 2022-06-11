const mongoose = require("mongoose");
require('dotenv').config({ path: './../../.env' });


//import schemas for each collection of documents
const User = require("./../schema/01-users");

//Import seed data
const seedUsers = require("./01-users")

//Connect to database - the access string is imported from .env
// mongoose
// .connect(process.env.DB_CONNECTION_STRING)
// .then(() => console.log("Connected to database"))
// // .then(() => db.dropCollection("users"))
// // .then(() => console.log("Success"))
// // .catch((err) => {console.log("Error: " + err.message)});

// //Store connection to database
// const db = mongoose.connection;
// db.dropCollection("users")
// .then(console.log("Dropped users"))
// .catch((err) => {console.log("Error: " + err.message)});

// db.dropCollection("users")
// .then(() => console.log("Success"))
// .catch((err) => console.log(err))


async function createUsers() {
    seedUsers.forEach(seedUserData => {
        const newUser = new User(seedUserData)
        User.create(newUser)
        .then(() => {console.log(`Added new user @${seedUserData.userhandle}`)})
        .catch((err) => {console.log("Error: " + err.message)});
    })
}


async function seedDB() {

    await mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then(() => {console.log("---Connected to database---")})
    .catch((err) => {console.log("Error: " + err.message)});

    const db = mongoose.connection;

    await db.dropCollection("users")
    .then(() => {console.log("Dropped users")})
    .catch((err) => {console.log("Error: " + err.message)});

    createUsers()

}


seedDB()