const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./connection");

const app = express();
const port = process.env.PORT || 5000;

const tasksRouter = require("./routes/tasks");
const projectsRouter = require("./routes/projects");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/tasks", tasksRouter);
app.use("/api/projects", projectsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
