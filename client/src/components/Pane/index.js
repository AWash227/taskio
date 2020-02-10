import React from "react";
import {
  IoIosCalendar,
  IoIosPlanet,
  IoIosToday,
  IoIosAddCircle
} from "react-icons/io";
import "../../index.scss";
import "./Pane.scss";
import PaneItem from "./PaneItem";
import Avatar from "../Avatar";
import API from "../../API";
import Button from "../Button";

export const Pane = ({ projects, onProjectClick, onNewProjectClick }) => {
  return (
    <div className="pane">
      <p className="pane--title">Focus</p>
      <PaneItem
        icon={<IoIosToday size={20} />}
        text="Today"
        func={() => console.log("Today Clicked!")}
      />
      <PaneItem
        icon={<IoIosCalendar size={20} />}
        text="Tomorrow"
        func={() => console.log("Tomorrow Clicked!")}
      />
      <PaneItem
        icon={<IoIosPlanet size={20} />}
        text="Future"
        func={() => console.log("Future Clicked!")}
      />
      <hr style={{ width: "100%" }} />
      <p className="pane--title">
        Projects
        <IoIosAddCircle
          size={16}
          style={{ float: "right", cursor: "pointer" }}
          onClick={() => onNewProjectClick}
        />
      </p>
      {projects ? (
        projects.map(project => {
          console.log("HI", project);
          return (
            <PaneItem
              icon={<Avatar src={project.img} />}
              text={`${project.title || project.name}`}
              func={() => onProjectClick(project)}
            />
          );
        })
      ) : (
        <div>
          <h4>Looking a little empty here...</h4>
          <Button onClick={() => onNewProjectClick}>New Project</Button>
        </div>
      )}
    </div>
  );
};

export default Pane;
