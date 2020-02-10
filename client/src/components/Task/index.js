import React from "react";
import "./Task.scss";

export const TaskItem = ({ task, onClick }) => {
  return (
    <div className="taskitem" onClick={onClick}>
      {task.title}
    </div>
  );
};

export default TaskItem;
