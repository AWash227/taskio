import React, { useState, useEffect } from "react";
import Data from "./Data";
import "./App.scss";
import ShrinkBar from "./components/ShrinkBar";
import Pane from "./components/Pane";
import Content from "./components/Content";
import API from "./API";
import Axios from "axios";

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
    API.project.get(projects => setProjects(projects));
  }, []);
  return (
    <div className="App">
      <ShrinkBar
        projects={projects}
        shrinkbaritems={Data.shrinkItems}
        handleProjectClick={handleProjectClick}
      />
      />
      <Pane project={project} setTask={setTask} />
      <Content task={task} setTask={setTask} />
    </div>
  );
}

export default App;
