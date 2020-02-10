import React from "react";
import "./Avatar.scss";

export const Avatar = ({ src, size }) => {
  return (
    <div
      className="avatar"
      style={{
        backgroundImage: `url(${src})`,
        width: `${size | 25}px`,
        height: `${size | 25}px`
      }}
    ></div>
  );
};

export default Avatar;
