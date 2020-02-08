import React from "react";
import Button from "./Button/Button";
import Tag from "./Tag";
import List from "./List";
import TaskItem from "./TaskItem";
import TaskList from "./TaskList";
import Description from "./Description";

export const Content = ({ task, setTask }) => {
  return (
    <div className="content">
      <div className="content-left">
        <Button>Add Sub-Task</Button>
        <Button>Add User</Button>
        <Button>Start Timer</Button>
      </div>
      {task ? (
        <div className="content-right">
          <h3>{task.title}</h3>
          {task.tags ? task.tags.map(tag => <Tag key={tag} tag={tag} />) : null}
          <Description description={task.description} />
          <TaskList tasks={task.tasks} setTask={setTask} />
        </div>
      ) : (
        <div className="content-right">Add a task</div>
      )}
    </div>
  );
};

export default Content;
