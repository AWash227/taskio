const taskService = require("../service/task");

exports.create = function(req, res, next) {
  let body = new Task(req.body);
  if (!body.title) {
    res.status(400).send("Title is missing");
    return;
  }
  taskService.createTask(body, function(error, response) {
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
  taskService.updateTaskById(body.id, updateData, (err, response) => {
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
  taskService.deleteTask(query, function(error, response) {
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

class Task {
  constructor(taskData) {
    this.title = taskData.title || "";
    this.complete = taskData.complete || false;
    this.tags = taskData.tags || [];
  }
}
