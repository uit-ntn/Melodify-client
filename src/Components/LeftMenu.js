import React from "react";
import "../Styles/LeftMenu.css";

import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlaylist } from "./MenuPlaylist";
import { PlayList } from "./PlayList";

function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoAndSearch">
        <div className="logoContainer">
          <i>
            <FaSpotify />
          </i>
          <h2>Melodify</h2>
          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className="searchBox">
          <input type="text" placeholder="Search..." />
          <i className="searchIcon">
            <BsSearch />
          </i>
        </div>
      </div>

      <Menu title={"Menu"} menuObject={MenuList} />

      <MenuPlaylist playlist={PlayList} />
    </div>
  );
}

export { LeftMenu };
