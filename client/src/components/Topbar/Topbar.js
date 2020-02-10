import React, { useState } from "react";
import { IoIosAlbums, IoIosSearch, IoIosSettings } from "react-icons/io";
import "./Topbar.scss";

export const Topbar = ({ onLogo, onSearch, onSettings }) => {
  const [search, setSearch] = useState("");
  if (!onSearch) {
    onSearch = () => console.log(search);
  }
  return (
    <div className="topbar">
      <span className="topbar--item" onClick={onLogo}>
        <div className="topbar--item-logo">
          <IoIosAlbums />
        </div>
      </span>
      <span>
        <IoIosSearch className="topbar--search-icon" size={20} />
        <input
          className="topbar--search"
          type="text"
          placeholder="Find a task, project, or tag"
          value={search}
          onKeyDown={e => (e.keyCode === 13 ? onSearch(e.target.value) : null)}
          onChange={e => setSearch(e.target.value)}
        ></input>
      </span>
      <span className="topbar--item" onClick={onSettings}>
        <div className="topbar--item-icon">
          <IoIosSettings />
        </div>
      </span>
    </div>
  );
};

export default Topbar;
