const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema ({
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true }],
    createdAt: {type: Date, immutable: true, default: () => Date.now()},
    messages: [{
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', immutable: true},
        sentAt: {type: Date, immutable: true},
        text: {type: String, immutable: true},
    }]

})

const Chat = mongoose.model("Chat", chatSchema, "chats");

module.exports = Chat;