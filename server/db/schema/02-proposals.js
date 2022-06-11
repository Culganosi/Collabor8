const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema ({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
    status: {type: String, require: true},
    title: {type: String, require: true},
    description: {type: String, require: true},
    createdAt: {type: Date, immutable: true, default: () => Date.now()},
    seeking: {type: [String], require: true},
})

const Proposal = mongoose.model("Proposal", proposalSchema, "proposals");

module.exports = Proposal;