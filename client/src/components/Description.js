import React, { useState, useEffect, useRef } from "react";
import setPrototypeOf from "setprototypeof";

const EmptyDesc = ({
  description,
  tempDesc,
  setTempDesc,
  setDescription,
  editing,
  setEditing
}) => {
  const text = useRef(null);
  useEffect(() => {
    if (editing) {
      text.current.focus();
      text.current.select();
    }
  }, []);
  return (
    <textarea
      ref={text}
      placeholder="Add a description..."
      className="task-description empty"
      defaultValue={tempDesc}
      onChange={e => setTempDesc(e.target.value)}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          setEditing(false);
          setDescription(tempDesc);
        }
      }}
      onBlur={e => {
        e.preventDefault();
        setEditing(false);
        setDescription(tempDesc);
      }}
    ></textarea>
  );
};

export const Description = ({ description }) => {
  const [_description, setDescription] = useState(description);
  const [_tempDesc, setTempDesc] = useState(description);
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    setDescription(description);
    setTempDesc(description);
    setEditing(false);
  }, [description]);

  if (editing || !_description) {
    return (
      <EmptyDesc
        description={_description}
        tempDesc={_tempDesc}
        setTempDesc={setTempDesc}
        setDescription={setDescription}
        setEditing={setEditing}
        editing={editing}
      />
    );
  }
  if (_description) {
    return (
      <p
        className="task-description"
        onClick={() => {
          setEditing(true);
          setDescription(_description);
        }}
      >
        {_description}
      </p>
    );
  }
};

export default Description;
