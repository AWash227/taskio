const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "A new task"
  },
  complete: {
    type: Boolean,
    required: true,
    default: false
  },
  description: {
    type: String,
    required: false,
    default: ""
  },
  tags: [String]
});

const task = new mongoose.model("Task", taskSchema);

module.exports = task;
