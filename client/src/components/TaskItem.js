import React from "react";

export const TaskItem = ({ task, onClick }) => {
  return (
    <div className="taskitem" onClick={onClick}>
      {task.title}
    </div>
  );
};

export default TaskItem;
