const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Task = require("../models/Task");
const Project = require("../models/Project");
// CREATE
router.route("/").post(function(req, res) {
  const project = req.body;

  const newProject = new Project({
    title: project.title,
    complete: project.complete,
    img: project.img,
    duedate: project.duedate,
    subTasks: project.tasks
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
  Project.findById(req.params.id)
    .populate("tasks")
    .then(proj => {
      res.json(proj);
    })
    .catch(err => res.status(400).json(err));
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

router.route("/addTask/").patch((req, res) => {
  Project.findById(req.body.projectId)
    .then(project => {
      project.updateOne(
        { $push: { tasks: mongoose.Types.ObjectId(req.body.taskId) } },
        (err, updated) => {
          if (err) {
            res.status(400).json("Error adding task");
          }
          res.json("Task added to: " + updated);
        }
      );
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
