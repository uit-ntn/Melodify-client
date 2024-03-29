import React from "react";
import Header from "./Header/Header";
import { MenuPlaylist } from "./MenuPlaylist";
function MainContainer() {

  return (
    <div className="mainContainer">
      <Header></Header>
      <MenuPlaylist></MenuPlaylist>
    </div>
  )
}

export default MainContainer ;
