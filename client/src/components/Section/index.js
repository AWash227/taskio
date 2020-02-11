import React, { useState } from "react";
import "./Section.scss";
import TaskItem from "../Task";
import { IoIosArrowDown, IoIosArrowUp, IoIosAddCircle } from "react-icons/io";
import Button from "../Button";

const Section = ({ projectTitle, section, setTask }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="section">
      <div className="section--bar" onClick={() => setExpanded(!expanded)}>
        {section.title === "__default"
          ? "Backlog"
          : section.title === "__completed"
          ? "Completed"
          : section.title === "__archived"
          ? "Archived"
          : section.title}
        {expanded ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>
      <div className="section--tasks">
        {section.tasks && expanded
          ? section.tasks.map(task => (
              <TaskItem task={task} onClick={() => setTask(task)} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Section;
