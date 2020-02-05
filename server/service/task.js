(function() {
  const mongoose = require("mongoose");
  require("../models/task");
  const task = mongoose.model("Task");

  // CREATE
  exports.createTask = function(data, callback) {
    task.create(data).then(
      response => {
        callback(null, response);
      },
      error => {
        callback(error, null);
      }
    );
  };

  // READ
  exports.findTask = function(query, callback) {
    task.findOne(query, callback);
  };

  // UPDATE
  exports.updateTaskById = function(id, data, callback) {
    task.findByIdAndUpdate(
      {
        _id: id
      },
      data,
      (err, response) => {
        callback(err, response);
      }
    );
  };

  exports.updateTask = function(query, data, options, callback) {
    task.findOneAndUpdate(query, data, options, (err, response) => {
      callback(err, response);
    });
  };

  // DELETE
  exports.deleteTask = function(query, callback) {
    task.deleteOne(query, callback);
  };
})();
