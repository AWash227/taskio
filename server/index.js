const express = require("express");
require("./connection");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const tasksRouter = require("./routes/tasks");
const projectsRouter = require("./routes/projects");

app.use(cors());
app.use(express.json());
app.use("/api/tasks", tasksRouter);
app.use("/api/projects", projectsRouter);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
