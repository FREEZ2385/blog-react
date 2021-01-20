import React from "react";
import { Header } from "react-fullpage";
import "./scss/MainHeader.scss";

function MainHeader() {
  return (
    <Header>
      <div className="header-area">
        <div className="title-area">フリーズのレイジネス</div>
        <div className="menu-area">
          <a href="#sectionOne">Top</a>
          <a href="#sectionTwo">About Me</a>
          <a href="#sectionThree">Works & Carrers</a>
          <a href="#sectionFour">Contact Me</a>
        </div>
      </div>
    </Header>
  );
}

export default MainHeader;
