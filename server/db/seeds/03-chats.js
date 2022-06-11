// const chatSchema = new mongoose.Schema ({
//     participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true }],
//     messages: [{
//         author: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
//         sentAt: {type: Date, immutable: true},
//         text: String
//     }]

// })


const chat1 = {
    participants: ["kmyrtle0", "rgostridge1"], //This will change to userIDs in the database
    messages: [
        {
            author: "kmyrtle0",
            text: "Hello there rgostridge1!"
            //sentAt: To be generated in the seed script
        },
        {
            author: "rgostridge1",
            text: "Hi kmyrtle0! Loving the cat avatar ;)"
        },
        {
            author: "kmyrtle0",
            text: "Right back atcha ฅ^•ﻌ•^ฅ "
        }
    ]
};

const chat2 = {
    participants: ["kmyrtle0", "lreardon2"], 
    messages: [
        {
            author: "lreardon2",
            text: "Hi kmyrtle0! I saw your proposal about getting feedback on the design of your portfolio - I would be happy to help!"
        },
        {
            author: "kmyrtle0",
            text: "Omg thanks a lot! Love your Behance portfolio btw! Btw your proposal for a hobby-matching app sounds neat, I'd love to help with the front-end of it!"
        }
    ]
};



const seedChats = [chat1, chat2]

module.exports = seedChats;