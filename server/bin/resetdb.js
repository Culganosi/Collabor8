//---Import libraries
const mongoose = require("mongoose");
require('dotenv').config({}); 
// require('dotenv').config({ path: './../.env' }); 

//---import schemas for each collection of documents
const User = require("./../db/schema/01-users");
const Proposal = require("./../db/schema/02-proposals");
const Chat = require("./../db/schema/03-chats");
const Option = require("./../db/schema/04-options");

//---Import seed data
const seedUsers = require("./../db/seeds/01-users");
const seedProposals = require("./../db/seeds/02-proposals");
const seedChats = require("./../db/seeds/03-chats");
const seedOptions = require("./../db/seeds/04-options");


//All the steps for adding proposals  - the documents of the authors are also updated
const insertProposalUpdateUser = async (seedProposalData) => {
    //Find the author of this proposal
    const author = await User.findOne({userhandle: seedProposalData.author})

    //In the database, the proposal references the author by database id (the original seed references by userhandle)
    const newProposal = new Proposal({...seedProposalData, author: author._id})
    const insertedProposal = await Proposal.create(newProposal)

    if(newProposal.status==="Active"){
        author.activeProposals.push(newProposal._id)
    } else {
        author.inactiveProposals.push(newProposal._id)
    }

    await author.save()
    console.log(`Added ${newProposal.status} proposal "${newProposal.title}" by @${author.userhandle}`)
}


//All the steps for adding chats  - the documents of the authors are also updated
const insertChatUpdateUsers = async(seedChatData) => {

    //Helper objects: A list of database IDs of participants
    //and an object with database objects of participants indexed by userhandles
    const participantIds = []
    const participantsByHandle = {}
    for (let userhandle of seedChatData.participants){
        const userDocument = await User.findOne({userhandle});
        participantsByHandle[userhandle] = userDocument;
        participantIds.push(userDocument._id)
    }

    //Create the chat and add it to the database -- change initial data to refer to authors by Id
    //Do not insert messages before they have been reformatted too
    const newChat = new Chat({...seedChatData, participants: participantIds, messages: null})
    const insertedChat = await Chat.create(newChat)

    //Change each message to refer to the author by ID, not userhandle
    //Also create "sent at" times one starting now and one minute apart
    let timeIncrementer = Date.now();
    const messagesWithIdsAndTimes = seedChatData.messages.map(message => {
        const newMessage = {... message, author: participantsByHandle[message.author]._id, sentAt: timeIncrementer}
        //Adding minutes to time
        //https://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
        timeIncrementer = new Date(timeIncrementer + 1*60000); 
        return newMessage;
    })

    //Update the chat documents to include reformatted messages
    insertedChat.messages = messagesWithIdsAndTimes;
    //Record the time of the last message
    insertedChat.lastMessageAt = messagesWithIdsAndTimes[messagesWithIdsAndTimes.length-1].sentAt;

    await insertedChat.save()

    //Add the id of this chat into the list of chats of all participating users
    for (let participant of Object.values(participantsByHandle)) {
        participant.chats.push(insertedChat._id)
        await participant.save()
    }

    //Print progress to console
    console.log(`Inserted chat between ${Object.keys(participantsByHandle).map(handle => `@${handle}`).join(" + ")}`)

}


//Steps of the reset: delete past data, then add new
const resetDB = async () => {
    
    //Empty previous data from collections
    await User.deleteMany({});
    await Proposal.deleteMany({});
    await Chat.deleteMany({});
    await Option.deleteMany({});

    console.log("xxx Deleted previous contents xxx \n")

    //Add user entries
    for (let seedUserData of seedUsers) {
        //When adding a user, sort skills in alphabetical order
        await User.create({...seedUserData, skills: seedUserData.skills.sort()})
        console.log(`Added user @${seedUserData.userhandle}`)
    }

    console.log();

    //Add proposal entries -- and reference them in the user data
    for (let seedProposalData of seedProposals) {
        await insertProposalUpdateUser(seedProposalData);
    }

    console.log();

    //Add chat entries -- and reference them in the user data
    for (let seedChatData of seedChats) {
        await insertChatUpdateUsers(seedChatData);
    }

    console.log();

    //Add options
    for (let seedOptionData of seedOptions){
        await Option.create(seedOptionData)
        console.log(`Added options for ${seedOptionData.title}`)
    }
}

//---------STARTS EXECUTING HERE: connect -> resetDB -> disconnect


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


readline.question(`
Resetting the DB will wipe all your data and replace it with contents of /db/seeds.
Enter Y/y if you're sure.\n`, (confirm) => {
    
    //IF confirmed: Connect --> ResetDB --> Disconnect
    if (confirm==="Y" || confirm=="y") {
        
        mongoose
        .connect(process.env.DB_CONNECTION_STRING)
        .then(() => console.log("\n--Connected to database--\n"))
        .catch((err) => console.log(err.message))

        resetDB().then(() => {
            console.log("\n--Closing connection--")
            mongoose.connection.close();
        })
    } 
    
    else {
        process.exit();
    }

    readline.close();
});

