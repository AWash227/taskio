import React from "react";

// Takes in item with {title: "", icon: </>, link: ""}

export const ShrinkBarItem = ({ expanded, shrinkbaritem, trans }) => {
  return (
    <div
      className="shrinkbar--item"
      onClick={() =>
        console.log(
          "Routing to: " + shrinkbaritem.link ? shrinkbaritem.link : ""
        )
      }
    >
      <span className="shrinkbar--item-icon">{shrinkbaritem.icon}</span>
      {expanded ? (
        <span className="shrinkbar--item-title">{shrinkbaritem.title}</span>
      ) : null}
    </div>
  );
};

export default ShrinkBarItem;
