const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    userhandle: {type: String, require: true, unique: true},
    password:  {type: String, require: true},
    avatar:  String,
    bio:  String,
    shortBio: String,
    role: String,
    createdAt: {type: Date, immutable: true, default: () => Date.now()},
    skills: [String],

    //A list of IDs only
    activeProposals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Proposal'}],
    inactiveProposals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Proposal'}],

    
    //A list IDs only
    chats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat'}],

    //A list of objects
    socialMedia: Object
})


//A model named "User" with the specified schema is used to make documents for the collection "users"
const User = mongoose.model("User", userSchema, "users");

module.exports = User;