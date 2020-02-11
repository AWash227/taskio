const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema({
  title: String,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }]
});

const Schema = new mongoose.Schema(
  {
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
    sections: [
      {
        type: SectionSchema,
        default: [
          { title: "__default", tasks: [] },
          { title: "__completed", tasks: [] },
          { title: "__archived", tasks: [] }
        ]
      }
    ]
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model("Project", Schema, "projects");

module.exports = Project;
