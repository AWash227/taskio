const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "A new project"
  },
  complete: {
    type: Boolean,
    required: true,
    default: false
  },
  img: {
    type: String,
    required: false
  },
  duedate: {
    type: Date,
    required: false
  },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }]
});

const project = new mongoose.model("Project", projectSchema);

module.exports = project;
