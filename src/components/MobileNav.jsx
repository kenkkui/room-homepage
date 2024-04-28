import React from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";

function MobileNav({ onClick }) {
  return (
    <nav className="mobile-navbar">
      <div className="hamburger">
        <img src={hamburger} alt="Menu Icon" onClick={onClick} />
      </div>

      <div className="logo">
        <img src={logo} alt="Room" />
      </div>
    </nav>
  );
}

export default MobileNav;
