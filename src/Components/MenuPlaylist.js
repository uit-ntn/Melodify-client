import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { PlayList } from "./PlayList";

function MenuPlaylist({ playlist }) {
  useEffect(() => {
    const allPlaylist = document.querySelectorAll(
      ".playlistScroll .playlistItem"
    );
    function changePlaylistActive() {
      allPlaylist.forEach((playlist) => {
        playlist.classList.remove("active");
      });
      this.classList.add("active");
    }
    allPlaylist.forEach((playlist) => {
      playlist.addEventListener("click", changePlaylistActive);
    });
  }, []);

  return (
    <div className=" bg-[rgba(34,34,34,0.6)] backdrop-blur-[10px] w-full p-[20px_25px] rounded-[10px] mb-2 p-0">
      <div className="flex justify-between items-center text-gray-500 py-4 px-6">
        <p className="text-base font-bold uppercase cursor-pointer">
          Your Library
        </p>
        <i className="cursor-pointer p-2.5 rounded-md relative hover:text-white hover:bg-[#171717]">
          <FaPlus />
        </i>
      </div>
      <div className="playlistScroll max-h-[230px] px-2.5 overflow-x-hidden overflow-y-auto relative">
        {PlayList &&
          PlayList.map((playlist) => (
            <div
              className="playlistItem flex items-center py-2.5 cursor-pointer text-gray-500 hover:bg-[#242424] hover:rounded"
              key={playlist.id}
            >
              <img
                className="w-12 h-12 rounded-md mr-2.5 object-cover"
                src={playlist.img}
                alt=""
              />
              <div>
                <p className="text-white">{playlist.name}</p>
                <p>Playlist • Me</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export { MenuPlaylist };
