const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    Time: String,
    Task: String
})

module.exports = mongoose.model('TaskList', taskSchema);
