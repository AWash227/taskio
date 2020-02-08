import React, { useState, useEffect } from "react";
import { SERVER_URL } from "./Constants";
import Data from "./Data";
import Split from "react-split";
import "./App.scss";
import ShrinkBar from "./components/ShrinkBar";
import Project from "./components/Project/Project";
import Content from "./components/Content";
import API from "./API";
import axios from "axios";
import Topbar from "./components/Topbar/Topbar";
import Pane from "./components/Pane/Pane";

function App() {
  const [project, setProject] = useState(Data.exProject);
  const [task, setTask] = useState({});
  const [projects, setProjects] = useState([Data.exProject, Data.ex2Project]);
  const handleProjectClick = project => {
    axios.get(`${SERVER_URL}/projects/${project._id}`).then(res => {
      setProject(res);
      if (res.tasks) {
        setTask(res.tasks[0]);
      }
    });
  };
  useEffect(() => {
    axios
      .get(`${SERVER_URL}/projects/list`)
      .then(res => {
        setProjects(res);
      })
      .catch(err => console.error(err));
    axios
      .get(`${SERVER_URL}/tasks/`)
      .then(res => {
        console.log(`TASKS: ${res}`);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="App">
      <div
        className="app-content"
        style={{ width: "inherit", height: "inherit" }}
      >
        <Topbar
          onLogo={() => console.log("Logo clicked!")}
          onSearch={search => console.log(`Searching for: ${search}`)}
          onSettings={() => console.log("Settings clicked!")}
        />
        <Pane projects={projects} onProjectClick={handleProjectClick} />
        <Project project={project} setTask={setTask} setProject={setProject} />
        <Content task={task} setTask={setTask} />
      </div>
    </div>
  );
}

export default App;
