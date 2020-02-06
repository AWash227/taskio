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

const task = new mongoose.model("Task", Schema);

module.exports = task;
