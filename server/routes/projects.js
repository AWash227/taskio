const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
require("../models/project");
const Project = mongoose.model("Project");

// CREATE
router.route("/").post(function(req, res) {
  const project = req.body;

  const newProject = new Project({
    title: project.title,
    complete: project.complete,
    img: project.img,
    duedate: project.duedate,
    tasks: project.tasks
  });
  newProject
    .save()
    .then(() => res.json(newProject))
    .catch(err => res.status(400).json("Error: " + err));
});

// READ
router.route("/").get(function(req, res) {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json("Error: " + err));
});
router.route("/:id").get((req, res) => {
  Project.findById(req.params.id)
    .populate("tasks")
    .then(project => res.json(project))
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

router.route("/add-task/:id").patch((req, res) => {
  Project.findById(req.params.id).then(project => {
    let newTasks = project.tasks;
    newTasks.push(mongoose.Types.ObjectId(req.body.id));
    projects.tasks = newTasks;
  });
});

module.exports = router;
