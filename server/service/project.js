(function() {
  const mongoose = require("mongoose");
  require("../models/project");
  const project = mongoose.model("Project");

  // CREATE
  exports.createProject = function(data, callback) {
    project.create(data).then(
      response => {
        callback(null, response);
      },
      error => {
        callback(error, null);
      }
    );
  };

  // READ
  exports.findProject = function(query, callback) {
    project.findOne(query, callback);
  };

  // UPDATE
  exports.updateProject = function(id, data, callback) {
    project.findByIdAndUpdate(
      {
        _id: id
      },
      data,
      (err, response) => {
        callback(err, response);
      }
    );
  };

  exports.updateProject = function(query, data, options, callback) {
    project.findOneAndUpdate(query, data, options, (err, response) => {
      callback(err, response);
    });
  };

  // DELETE
  exports.deleteProject = function(query, callback) {
    project.deleteOne(query, callback);
  };
})();
