import React from "react";

export const Avatar = ({ name, src, expanded, onClick }) => {
  return (
    <div
      className="avatar"
      onClick={onClick}
      style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }}
    ></div>
  );
};

export default Avatar;
