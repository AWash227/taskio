import React from "react";
import Button from "../Button";

const ActionButton = ({ title, onClick }) => {
  return (
    <Button style={{ width: "33%" }} onClick={onClick}>
      {title}
    </Button>
  );
};

export default ActionButton;
