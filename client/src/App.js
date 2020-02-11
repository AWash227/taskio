import React, { useState, useEffect } from "react";
import { SERVER_URL } from "./Constants";
import Data from "./Data";
import "./App.scss";
import Project from "./components/Project";
import Content from "./components/Content";
import axios from "axios";
import { Topbar } from "./components";
import Pane from "./components/Pane";

function App() {
  const [project, setProject] = useState({});
  const [task, setTask] = useState({});
  const [projects, setProjects] = useState([]);
  const handleProjectClick = project => {
    axios.get(`${SERVER_URL}/projects/${project._id}`).then(res => {
      setProject(res.data);
      if (res.data.tasks) {
        setTask(res.data.tasks[0]);
      }
    });
  };
  const addProject = () => {
    axios
      .post(`${SERVER_URL}/projects`, {
        title: "New Project!",
        complete: "Complete",
        img:
          "https://i.pinimg.com/564x/12/07/29/120729bc39ecd62b1ce0115374f55393.jpg",
        duedate: new Date(),
        tasks: []
      })
      .then(newProject => console.log(newProject))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/projects`)
      .then(res => {
        setProjects(res.data);
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
        <Pane
          projects={projects}
          onProjectClick={handleProjectClick}
          onNewProjectClick={addProject}
        />
        <Project project={project} setTask={setTask} setProject={setProject} />
        <Content task={task} setTask={setTask} />
      </div>
    </div>
  );
}

export default App;
