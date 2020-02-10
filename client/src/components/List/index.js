import React from "react";
import "./List.scss";

export const List = props => {
  return <div className="list">{props.children}</div>;
};

export default List;
