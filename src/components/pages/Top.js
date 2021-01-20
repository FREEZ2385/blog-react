import { Avatar, Paper } from "@material-ui/core";
import { Transition } from "react-transition-group";
import React from "react";
import imgs from "../../assets/img/test.jpg";
import patternimg from "../../assets/img/pattern.png";
import "./scss/Top.scss";

function Top() {
  return (
    <div className="top-area" style={{ backgroundImage: `url(${patternimg})` }}>
      <div className="name-area">
        <Transition in={true} timeout={1000} appear>
          {(status) => <h1 className={`text text-${status}`}>Lee SangCheol</h1>}
        </Transition>
        <Transition in={true} timeout={5000} appear>
          {(status) => (
            <h4 className={`text text-${status}`}>
              フロントエンド開発者, バックエンド開発者を目指す
            </h4>
          )}
        </Transition>
      </div>
      <div className="photo-area">
        <Paper className="photo-line"></Paper>
      </div>
    </div>
  );
}

export default Top;
