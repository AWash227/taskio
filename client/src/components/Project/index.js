import React, { useEffect, useState } from "react";
import { IoIosTrash } from "react-icons/io";
import Section from "../Section";
import moment from "moment";
import List from "../List";
import Button from "../Button";
import API from "../../API";
import "./Project.scss";

export const Project = ({ project, setTask }) => {
  const [currProj, setCurrProj] = useState(project);
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
        <Button
          style={{ width: "33%" }}
          onClick={() => {
            API.project.addTask(
              currProj._id,
              {
                title: "Updated Hello",
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
          }}
        >
          Add Task
        </Button>
        <Button
          style={{ width: "33%" }}
          onClick={() => {
            API.project.addTask(
              currProj._id,
              {
                title: "Hello",
                complete: false,
                description: "",
                tags: [],
                tasks: []
              },
              task => {
                console.log(task);
              }
            );
          }}
        >
          Add Section
        </Button>
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
