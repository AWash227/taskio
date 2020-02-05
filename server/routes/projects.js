const express = require("express");
const router = express.Router();
const project = require("../controllers/project");

router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/", project.create);

router.put("/updatebyid", project.updateById);

router.delete("/delete", project.delete);

module.exports = router;
