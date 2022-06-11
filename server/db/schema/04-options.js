const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema ({
    title: String,
    data: {} //this means data can be anything
})

const Option = mongoose.model("Option", optionSchema, "options");

module.exports = Option;