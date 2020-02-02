import React, { useState } from "react";
import { IoIosHome, IoIosPlayCircle } from "react-icons/io";
import "./App.scss";
import ShrinkBar from "./components/ShrinkBar";
import Pane from "./components/Pane";
import Content from "./components/Content";

const shrinkItems = [
  { title: "Home", icon: <IoIosHome size={25} />, link: "/" },
  {
    title: "Start Next Task",
    icon: <IoIosPlayCircle size={25} />,
    link: "/next_task"
  }
];

const exProject = {
  name: "Holcomb",
  due: new Date(),
  tasks: [
    {
      title: "Clean up drywall on ground",
      tags: ["Work", "Stage 1"],
      description: "Enhance overall cleanliness of the house."
    },
    { title: "Install sliding glass door", tags: ["Work", "Stage 1"] },
    {
      title: "Lay down sub-flooring in purple room",
      tags: ["Work", "Stage 1"]
    },
    {
      title: "Clean room",
      tags: ["Personal", "Cleanliness"],
      description:
        "Clean bathroom with chemicals, and bring all dishes and materials that need to be downstairs, downstairs.",
      tasks: [
        {
          title: "Clean up drywall on ground",
          tags: ["Work", "Stage 1"],
          description: "Enhance overall cleanliness of the house."
        },
        { title: "Install sliding glass door", tags: ["Work", "Stage 1"] },
        {
          title: "Lay down sub-flooring in purple room",
          tags: ["Work", "Stage 1"]
        }
      ]
    },
    { title: "Laundry", tags: ["Personal", "Cleanliness"] }
  ]
};

function App() {
  const [project, setProject] = useState(exProject);
  const [task, setTask] = useState(project.tasks[0]);
  return (
    <div className="App">
      <ShrinkBar shrinkbaritems={shrinkItems} />
      <Pane project={project} setTask={setTask} />
      <Content task={task} setTask={setTask} />
    </div>
  );
}

export default App;
