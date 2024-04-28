import React from "react";
import logo from "../images/logo.svg";

function DesktopNav() {
  return (
    <nav className="desktop-navbar">
      <div className="logo">
        <img src={logo} alt="Room" />
      </div>

      <div className="menu-btns">
        <NavLinks title="home" />
        <NavLinks title="shop" />
        <NavLinks title="about" />
        <NavLinks title="contact" />
      </div>
    </nav>
  );
}

export default DesktopNav;
