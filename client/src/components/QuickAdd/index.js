import React, { useState } from "react";
import "./QuickAdd.scss";
import Tag from "../Tag";
import Button from "../Button";
import { IoIosAdd } from "react-icons/io";
import Description from "../Description";

const QuickAdd = onSubmit => {
  const [title, setTitle] = useState("");
  const [checked, setChecked] = useState(false);
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState("");
  return (
    <div className="quick-add">
      <div className="inputs">
        <input
          className="quick-add--complete"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <input
          className="quick-add--title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Task Name..."
        />
      </div>
      <div className="quick-add--tags">
        Tags:{" "}
        {tags
          ? tags.map((tag, i) => (
              <Tag
                key={i}
                tag={tag}
                onDeleteClick={() => {
                  console.log("Deleting tag");
                  let newTags = [...tags];
                  newTags.splice(i, 1);
                  setTags(newTags);
                }}
              />
            ))
          : null}
        <span onClick={() => setTags([...tags, prompt("Tagname: ")])}>
          <IoIosAdd />
        </span>
      </div>
      <Description description={description} />
      <Button>Create Task</Button>
    </div>
  );
};

export default QuickAdd;
