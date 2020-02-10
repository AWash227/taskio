import React from "react";
import Button from "../Button";
import Tag from "../Tag";
import Description from "../Description";
import "./Content.scss";
import List from "../List";
import TaskItem from "../Task";

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
          <List>
            {task.tasks
              ? task.tasks.map(task => {
                  {
                    return task ? (
                      <TaskItem
                        key={task._id || task.title}
                        task={task}
                        onClick={() => setTask(task)}
                      />
                    ) : null;
                  }
                })
              : null}
          </List>
        </div>
      ) : (
        <div className="content-right">Add a task</div>
      )}
    </div>
  );
};

export default Content;
