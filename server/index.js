const express = require("express");
require("./connection");
const cors = require("cors");

const projectsRouter = require("./routes/projects");
const tasksRouter = require("./routes/tasks");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/tasks", tasksRouter);
app.use("/api/projects", projectsRouter);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
