const express = require("express");
const router = express.Router();
require("./connection");
const cors = require("cors");

const projectsRouter = require("./routes/projects");
const tasksRouter = require("./routes/tasks");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
router.use("/api/projects", projectsRouter);
router.use("/api/tasks", tasksRouter);
app.use(router);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
