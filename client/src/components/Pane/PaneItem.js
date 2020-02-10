import React from "react";

export const PaneItem = ({ icon, text, func }) => {
  return (
    <div className="pane--item" onClick={func}>
      {icon ? <span className="pane--item-icon">{icon}</span> : null}
      <span className="pane--item-text">{text}</span>
    </div>
  );
};

export default PaneItem;
