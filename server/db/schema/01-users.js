const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    email:  {type: String, require: true, unique: true, lowercase: true},
    password:  {type: String, require: true},
    userhandle: String,
    avatar:  String,
    bio:  String,
    createdAt: {type: Date, immutable: true, default: () => Date.now()},
    skills: [String],

    //A list of IDs only
    activeProposals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Proposal'}],
    inactiveProposals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Proposal'}],

    
    //A list IDs only
    chats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat'}],

    //A list of objects
    socialMedia: [{
        title: String, 
        url: String
    }]
})


//A model named "User" with the specified schema is used to make documents for the collection "users"
const User = mongoose.model("User", userSchema, "users");

module.exports = User;