const express = require("express");
const router = express.Router();
const task = require("../controllers/task");

router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/", task.create);

router.put("/updatebyid", task.updateById);

router.delete("/delete", task.delete);

module.exports = router;
