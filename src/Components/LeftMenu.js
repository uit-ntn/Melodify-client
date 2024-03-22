import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import SearchBar from "./Header/HeaderSearchBar";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlaylist } from "./MenuPlaylist";
import { PlayList } from "./PlayList";

function LeftMenu() {
  return (
    <div className="flex-1 h-full min-h-screen transition-all duration-300 min-w-[300px]">
      <div className="bg-[rgba(34,34,34,0.6)] backdrop-blur-[10px] w-full p-[20px_25px] rounded-[10px] mb-2">
        <div className="flex items-center justify-between">
          <i className="text-3xl cursor-pointer">
            <img className="" src={require("../img/logo.jpg")}></img>
          </i>
          <h2 className="text-lg font-bold">Melodify</h2>
          <i className="text-lg cursor-pointer">
            <FaEllipsisH />
          </i>
        </div>
        <div className="w-full h-[45px] relative mt-5 text-gray-400 overflow-hidden rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full outline-none border-none bg-black bg-opacity-50 pl-12 text-white text-lg font-bold"
            style={{ fontSize: "14px" }}
          />

          <SearchBar></SearchBar>

        </div>
      </div>

      <Menu title={"Menu"} menuObject={MenuList} />

      <MenuPlaylist playlist={PlayList} />
    </div>
  );
}

export { LeftMenu };
