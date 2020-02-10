const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
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
    tags: [String],
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }]
  },
  {
    timestamps: true
  }
);

const Task = mongoose.model("Task", Schema, "tasks");

module.exports = Task;
