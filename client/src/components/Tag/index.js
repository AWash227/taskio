import React from "react";
import "./Tag.scss";
import { IoIosRemoveCircle } from "react-icons/io";

export const Tag = ({ tag, onDeleteClick }) => (
  <span className="tag">
    <div className="stuff">
      <p style={{ display: "inline" }}>{tag}</p>
      <IoIosRemoveCircle size={16} onClick={onDeleteClick} />
    </div>
  </span>
);

export default Tag;
