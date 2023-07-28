import React from "react";
import "./Nav.scss";
import darkToggle from "/dark-toggle.svg";
import lightToggle from "/light-toggle.svg";

const Nav = () => {
  return (
    <>
      <div className="container">
        <nav>
          <h1>devfinder</h1>
          <div className="toggle">
            <span>Dark</span>
            <img src={darkToggle} alt="dark mode toggle" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
