import React, { useState } from "react";
import ShrinkBarItem from "./ShrinkBarItem";
import { IoIosTrendingUp } from "react-icons/io";
import ShrinkBarSearch from "./ShrinkBarSearch";
import Avatar from "./Avatar";
import "./ShrinkBar.scss";

// Takes in a menu item with data that look like
// {title: "", icon: </>, link: ""}
export const ShrinkBar = ({ projects, shrinkbaritems, handleProjectClick }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <aside
      className={`shrinkbar ${expanded ? "expanded" : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <ShrinkBarItem
        shrinkbaritem={{
          title: "Taskio",
          icon: <IoIosTrendingUp size={25} />,
          link: "/"
        }}
        expanded={expanded}
      />
      <ShrinkBarSearch
        onSearch={searchTerm => console.log("Searching for: " + searchTerm)}
        expanded={expanded}
      />
      {shrinkbaritems.map(shrinkbaritem => (
        <ShrinkBarItem
          key={shrinkbaritem.title}
          shrinkbaritem={shrinkbaritem}
          expanded={expanded}
          callback={() => console.log(`Routing to: ${shrinkbaritem.link}`)}
        ></ShrinkBarItem>
      ))}
      <hr className="shrinkbar--rule" />
      {projects.map(project => (
        <ShrinkBarItem
          key={project._id || project.title}
          expanded={expanded}
          shrinkbaritem={{
            title: project.title,
            icon: <Avatar src={project.src || project.img} />,
            link: "/"
          }}
          callback={() => handleProjectClick(project)}
        />
      ))}
    </aside>
  );
};

export default ShrinkBar;
