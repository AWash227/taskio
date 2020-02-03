import React from "react";

export const Avatar = ({ name, src, expanded, onClick }) => {
  return (
    <div className="avatar" onClick={onClick}>
      <span
        className="avatar--icon"
        style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }}
      ></span>
      {expanded ? <span className="avatar--name">{name}</span> : null}
    </div>
  );
};

export default Avatar;
