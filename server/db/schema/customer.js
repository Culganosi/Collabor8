const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstName: {type: String, require: true, unique: true},
    lastName: {type: String, require: true, unique: true},

})


const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer; 