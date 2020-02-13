import React, { useEffect, useState } from "react";
import { IoIosTrash } from "react-icons/io";
import Section from "../Section";
import moment from "moment";
import List from "../List";
import Button from "../Button";
import API from "../../API";
import "./Project.scss";
import ActionButton from "./ActionButton";

export const Project = ({ project, setTask }) => {
  const [currProj, setCurrProj] = useState(project);
  const addTask = currProj => {
    API.project.addTask(
      currProj._id,
      {
        title: "New boi to test",
        complete: false,
        description: "",
        tags: [],
        tasks: []
      },
      "__default",
      task => {
        console.log(task);
      }
    );
  };

  const addSection = (currProj, section) => {
    API.project.addSection(currProj._id, section, section =>
      console.log(section)
    );
  };
  useEffect(() => {
    // If the project loaded in pane is fetched from database
    if (project._id) {
      if (project !== currProj) {
        console.log("Fetching hi-res project");
        // load a more accurate version of it
        API.project.getById(project._id, proj => {
          setCurrProj(proj);
          console.log("Finished fetching", proj);
        });
      }
    }
  }, [project]);
  return (
    <div className="project">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>{currProj.title || "Select a Project!"}</h3>
        <span
          style={{ marginLeft: "auto" }}
          onClick={() => API.project.remove(currProj._id)}
        >
          <IoIosTrash size={25} />
        </span>
      </div>
      <h4>{moment(currProj.due).format("MMM DD, YYYY")}</h4>
      <div className="project--actions">
        <ActionButton title="Add Task" onClick={() => addTask(currProj)} />
        <ActionButton
          title="Add Section"
          onClick={() =>
            addSection(currProj, {
              title: "New section name to test",
              tasks: []
            })
          }
        />
      </div>
      <br />
      {currProj.sections ? (
        <List>
          {currProj.sections.map(section => (
            <Section
              projectTitle={project.title}
              section={section}
              setTask={setTask}
            />
          ))}
        </List>
      ) : null}
    </div>
  );
};

export default Project;
