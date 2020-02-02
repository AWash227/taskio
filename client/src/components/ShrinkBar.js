import React, { useState } from "react";
import ShrinkBarItem from "./ShrinkBarItem";
import { IoIosTrendingUp } from "react-icons/io";

// Takes in a menu item with data that look like
// {title: "", icon: </>, link: ""}
export const ShrinkBar = ({ shrinkbaritems }) => {
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
      {shrinkbaritems.map(shrinkbaritem => (
        <ShrinkBarItem
          key={shrinkbaritem.title}
          shrinkbaritem={shrinkbaritem}
          expanded={expanded}
        />
      ))}
      <hr className="shrinkbar--rule" />
    </aside>
  );
};

export default ShrinkBar;
