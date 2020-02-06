const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Task = mongoose.model("Task");

// CREATE
router.route("/").post(function(req, res) {
  const task = req.body;

  const newTask = new Task({
    title: task.title,
    complete: task.complete,
    description: task.description,
    tags: task.tags,
    subTasks: task.tasks
  });

  newTask
    .save()
    .then(() => res.json("Task added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// READ
router.route("/").get(function(req, res) {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json("Error: " + err));
});
router.route("/:id").get(function(req, res) {
  Task.findOne({ _id: req.params.id })
    .then(task => res.json(task))
    .catch(err => res.status(400).json("Error: " + err));
});

// UPDATE
router.route("/:id").put((req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res
      .json("Task updated!")
      .catch(err => res.status(400).json("Error: " + err))
  );
});

// DELETE
router.route("/:id").delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json("Task deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
