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
    <div className="playlistContainer">
      <div className="nameContainer">
        <p>Your Library</p>
        <i className="addPlaylist-img">
          <FaPlus />
        </i>
      </div>
      <div className="playlistScroll">
        {PlayList &&
          PlayList.map((playlist) => (
            <div className="playlistItem" key={playlist.id}>
              <img className="playlistImg" src={playlist.img} alt="" />
              <div className="playlistWrap">
                <p className="playlistName">{playlist.name}</p>
                <p>Playlist - Me</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export { MenuPlaylist };
