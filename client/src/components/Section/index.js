import React, { useState } from "react";
import "./Section.scss";
import TaskItem from "../Task";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosAddCircle,
  IoIosTrash,
  IoIosRemove,
  IoIosRemoveCircle,
  IoIosClose
} from "react-icons/io";
import Button from "../Button";
import Action from "./Action";

const Section = ({ projectTitle, section, setTask }) => {
  const [expanded, setExpanded] = useState(section.tasks > 0 ? true : false);
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
        <span>
          <span className="pill">{section.tasks.length}</span>
          {expanded ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
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
