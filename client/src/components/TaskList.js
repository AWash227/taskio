import React from "react";
import TaskItem from "./TaskItem";
import List from "./List";

export const TaskList = ({ tasks, setTask }) => {
  if (tasks) {
    return (
      <List>
        {tasks.map(task => (
          <TaskItem
            key={task.title}
            task={task}
            onClick={() => setTask(task)}
          />
        ))}
      </List>
    );
  }
  return null;
};

export default TaskList;
