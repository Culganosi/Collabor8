const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema ({
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true }],
    lastMessageAt: {type: Date},
    messages: [{
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', immutable: true},
        sentAt: {type: Date, immutable: true},
        text: {type: String, immutable: true},
        type: {type: String, immutable: true}
    }]

})

const Chat = mongoose.model("Chat", chatSchema, "chats");

module.exports = Chat;