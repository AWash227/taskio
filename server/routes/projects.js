const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Task = require("../models/Task");
const Project = require("../models/Project");
// CREATE
router.route("/").post(function(req, res) {
  const newProject = new Project({
    title: req.body.title,
    complete: req.body.complete,
    img: req.body.img,
    duedate: req.body.duedate,
    subTasks: req.body.tasks
  });
  newProject
    .save()
    .then(() => res.json(newProject))
    .catch(err => res.status(400).json("Error: " + err));
});

// READ
router.route("/list").get(function(req, res) {
  Project.find({}, { title: true, img: true })
    .then(projects => res.json(projects))
    .catch(err => {
      res.status(400).json("Error" + err);
    });
});
router.route("/:id").get((req, res) => {
  // Get the project
  Project.findById(req.params.id)
    .populate({ path: "sections.tasks" })
    .exec((err, populated) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(populated);
    });
  /*
    .exec((err, project) => {
      if (err) {
        res.status(400).json("Error: " + err);
      }
      res.json(project);
    });
    */
});
router.route("/").get(function(req, res) {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json("Error: " + err));
});

// UPDATE
router.route("/:id").put((req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res
      .json("Project updated!")
      .catch(err => res.status(400).json("Error: " + err))
  );
});

// DELETE
router.route("/:id").delete((req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json("Project deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/addTask").post((req, res) => {
  const newTask = new Task({
    title: req.body.task.title,
    complete: req.body.task.complete,
    description: req.body.task.description,
    tags: req.body.task.tags,
    subTasks: req.body.task.tasks
  });

  newTask
    .save()
    .then(task => {
      Project.updateOne(
        {
          _id: req.body.projectId,
          sections: { $elemMatch: { title: req.body.section } }
        },
        {
          $push: {
            "sections.$.tasks": mongoose.Types.ObjectId(req.body.task._id)
          }
        }
      )
        .then(updatedProj => res.json(updatedProj))
        .catch(err => res.status(400).json("Error adding task: " + err));
      res.json("Task " + task._id + " added!");
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
