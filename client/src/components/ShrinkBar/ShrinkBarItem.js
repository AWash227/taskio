import React from "react";

// Takes in item with {title: "", icon: </>, link: ""}

export const ShrinkBarItem = ({ expanded, shrinkbaritem, callback, menu }) => {
  return (
    <div className="shrinkbar--item" onClick={callback}>
      <span className="shrinkbar--item-icon">{shrinkbaritem.icon}</span>
      {expanded ? (
        <span className="shrinkbar--item-title">{shrinkbaritem.title}</span>
      ) : null}
    </div>
  );
};

export default ShrinkBarItem;
