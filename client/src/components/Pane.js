import React from "react";
import TaskItem from "./TaskItem";
import moment from "moment";
import List from "./List";
import Button from "./Button";

export const Pane = ({ project, setTask }) => {
  return (
    <div className="pane">
      <h3>{project.name}</h3>
      <h4>{moment(project.due).format("MMM DD, YYYY")}</h4>
      <div className="pane--actions">
        <Button style={{ width: "33%" }}>Add Task</Button>
        <Button style={{ width: "33%" }}>Add Task</Button>
        <Button style={{ width: "33%" }}>Add Task</Button>
      </div>
      <br />
      <List>
        {project.tasks.map(task => (
          <TaskItem
            key={task.title}
            task={task}
            onClick={() => setTask(task)}
          />
        ))}
      </List>
    </div>
  );
};

export default Pane;
