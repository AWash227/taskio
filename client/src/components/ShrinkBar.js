import React, { useState } from "react";
import ShrinkBarItem from "./ShrinkBarItem";
import { IoIosTrendingUp } from "react-icons/io";
import ShrinkBarSearch from "./ShrinkBarSearch";
import Avatar from "./Avatar";

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
        >
          <span className="shrinkbar--item-icon">{shrinkbaritem.icon}</span>
          <span className="shrinkbar--item-text">{shrinkbaritem.title}</span>
        </ShrinkBarItem>
      ))}
      <hr className="shrinkbar--rule" />
      {projects.map(project => (
        <Avatar
          key={project.name}
          onClick={() => {
            handleProjectClick(project);
          }}
          name={project.name}
          src={project.src}
          expanded={expanded}
        />
      ))}
    </aside>
  );
};

export default ShrinkBar;
