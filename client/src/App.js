import React, { useState, useEffect } from "react";
import Data from "./Data";
import Split from "react-split";
import "./App.scss";
import ShrinkBar from "./components/ShrinkBar";
import Project from "./components/Project";
import Content from "./components/Content";
import API from "./API";
import Axios from "axios";
import Topbar from "./components/Topbar/Topbar";
import Pane from "./components/Pane/Pane";

function App() {
  const [project, setProject] = useState(Data.exProject);
  const [task, setTask] = useState(project.tasks[0]);
  const [projects, setProjects] = useState([Data.exProject, Data.ex2Project]);
  const handleProjectClick = project => {
    API.project.getById(project._id, proj => {
      setProject(proj);
      setTask(proj.tasks[0]);
    });
  };
  useEffect(() => {
    API.project.get(projects => {
      setProjects(projects);
      console.log(projects);
    });
    API.task.get(tasks => {
      console.log(tasks);
    });
  }, []);
  return (
    <div className="App">
      <div className="app-content">
        <Topbar
          onLogo={() => console.log("Logo clicked!")}
          onSearch={search => console.log(`Searching for: ${search}`)}
          onSettings={() => console.log("Settings clicked!")}
        />
        <Pane />
        <Project project={project} setTask={setTask} setProject={setProject} />
        <Content task={task} setTask={setTask} />
      </div>
    </div>
  );
}

export default App;
