import React from "react";
import { IoIosSearch } from "react-icons/io";

export const ShrinkBarSearch = ({ expanded, onSearch }) => {
  return (
    <div className="shrinkbar--search">
      <span className="shrinkbar--search-icon">
        <IoIosSearch size={25} />
      </span>
      {expanded ? (
        <span className="shrinkbar--search-input">
          <input
            onKeyDown={e => {
              if (e.keyCode === 13) {
                onSearch(e.target.value);
                e.target.value = "";
              }
            }}
            type="text"
            placeholder="Search..."
          ></input>
        </span>
      ) : null}
    </div>
  );
};

export default ShrinkBarSearch;
