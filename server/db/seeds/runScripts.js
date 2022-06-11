const mongoose = require("mongoose");
require('dotenv').config({ path: './../../.env' });


//---import schemas for each collection of documents
const User = require("./../schema/01-users");
const Proposal = require("./../schema/02-proposals")
const Option = require("./../schema/04-options");

//---Import seed data
const seedUsers = require("./01-users")
const seedProposals = require("./02-proposals")
const seedOptions = require("./04-options")


async function createUser(seedUserData){
    const myPromise = new Promise((resolve, reject) => {
        const newUser = new User(seedUserData)
        User.create(newUser)
        .then(() => {
            console.log(`Added new user @${seedUserData.userhandle}`)
            resolve()
        })
        .catch((err) => {console.log("Error: " + err.message)});
    })
    return myPromise;
}

async function createUsers() {
    const myPromise = new Promise((resolve, reject) => {
        seedUsers.forEach(seedUserData => createUser(seedUserData))
        resolve()
    });
    return myPromise;
}


//------------------------------

async function createOption(seedOptionData){
    const myPromise = new Promise((resolve, reject) => {
        const newOption = new Option(seedOptionData)
        Option.create(newOption)
        .then(() => {
            console.log(`Added options for ${seedOptionData.title}`)
            resolve()
        })
        .catch((err) => {console.log("Error: " + err.message)});
    })
    return myPromise;
}

async function createOptions() {
    const myPromise = new Promise((resolve, reject) => {
        seedOptions.forEach(seedOptionData => createOption(seedOptionData))
        resolve()
    });
    return myPromise;
}

//-------------------------------

async function createProposal(seedProposalData){
    //Find the ID that matched the name of the author
    const authorId = await User.findOne({userhandle: seedProposalData.author})._id

    const myPromise = new Promise((resolve, reject) => {
        //Change the author field from the userhandle to the database id before inserting
        const newProposal = new Proposal({...seedProposalData, author: authorId})
        Proposal.create(newProposal)
        .then((insertedProposal) => {

            User.updateOne({_id: authorId}, {email: "AAAAAAAAAAAAA"})

        })
        .then(() => {
            console.log(`Added proposal titled "${seedProposalData.title}"`)
            resolve()
        })
        .catch((err) => {console.log("Error: " + err.message)});
    })


    return myPromise;
}

async function createProposals() {
    const myPromise = new Promise((resolve, reject) => {
        seedProposals.forEach(seedProposalData => createProposal(seedProposalData))
        resolve()
    });
    return myPromise;
}

//-------------------------------



//-------------------------------

async function seedDB() {

    await mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then(() => {console.log("---Connected to database---")})
    .catch((err) => {console.log("Error: " + err.message)});

    const db = mongoose.connection;

    await db.dropCollection("users")
    .then(() => {console.log(">>> Dropped collection: users")})
    .catch((err) => {console.log("Error: " + err.message)});

    await db.dropCollection("options")
    .then(() => {console.log(">>> DroppDropped collection:ed options")})
    .catch((err) => {console.log("Error: " + err.message)});

    await db.dropCollection("proposals")
    .then(() => {console.log(">>> Dropped collection: proposals")})
    .catch((err) => {console.log("Error: " + err.message)});

    console.log("---")
    // const done = await createUsers()

    // if (done) mongoose.connection.close()

    createUsers()
    .then(console.log("DONE"))

    // await createProposals()
    // await createOptions()

}


seedDB()