const projectService = require("../service/project");

exports.create = function(req, res, next) {
  let body = new Project(req.body);
  if (!body.title) {
    res.status(400).send("Title is missing");
    return;
  }
  projectService.createProject(body, function(error, response) {
    if (response) {
      res.status(201).send(response);
    } else if (error) {
      res.status(400).send(error);
    }
  });
};

exports.updateById = function(req, res) {
  let body = req.body;

  if (!body.id) {
    res.status(400).send("Id is missing");
    return;
  }
  let updateData = body.data || {};
  projectService.updateProjectById(body.id, updateData, (err, response) => {
    if (response) {
      res.status(200).send(response);
    } else if (err) {
      res.status(400).send(err);
    }
  });
};

exports.delete = function(req, res) {
  let body = request.body || {};
  let query = body.query;
  if (!query) {
    res.status(400).send("Bad Request");
    return;
  }
  projectService.deleteProject(query, function(error, response) {
    if (error) {
      res.status(400).send(error);
      return;
    }
    if (response) {
      if (response.n === 1 && response.ok === 1) {
        res.status(202).send(body);
      }
      if (response.n === 0 && response.ok === 1) {
        res.status(204).send({
          message: "No data found"
        });
      }
    }
  });
};

class Project {
  constructor(projectData) {
    this.title = projectData.title || "";
    this.complete = taskData.complete || false;
    this.img = taskData.img || "";
    this.duedate = projectData.duedate || null;
    this.tasks = projectData.tasks || [];
  }
}
