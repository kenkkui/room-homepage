import React from "react";
import NavLinks from "./NavLinks";
import closeIcon from "../images/icon-close.svg";

function DropDown({ openDropDown, animationEnd, onClick }) {
  return (
    <section className={`drop-down-menu ${!openDropDown ? "close" : ""}`}>
      <div
        className={`drop-down ${
          openDropDown ? "animation-open" : "animation-close"
        }`}
        onAnimationEnd={animationEnd}
      >
        <div className="close-icon" onClick={onClick}>
          <img src={closeIcon} alt="Close menu" />
        </div>

        <div className="menu-btns" data-mobile-nav="true">
          <NavLinks title="home" />
          <NavLinks title="shop" />
          <NavLinks title="about" />
          <NavLinks title="contact" />
        </div>
      </div>
    </section>
  );
}

export default DropDown;
