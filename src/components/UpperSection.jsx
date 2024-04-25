import React from "react";
import iconArrow from "../images/icon-arrow.svg";
import iconAngleLeft from "../images/icon-angle-left.svg";
import iconAngleRight from "../images/icon-angle-right.svg";
import logo from "../images/logo.svg";
import NavLinks from "./NavLinks";

function UpperSection() {
  return (
    <section id="upper-section">
      <section className="main-image-grid">
        <nav>
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
      </section>

      <section className="main-context-grid">
        <h1 className="main-context-title">
          Discover innovative ways to decorate
        </h1>
        <p className="main-context-text">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>

        <a href="/" className="shop-now-link">
          shop now
          <img src={iconArrow} alt="Shop now!" />
        </a>
      </section>

      <section className="btn-container">
        <button className="prev-btn">
          <img src={iconAngleLeft} alt="previous button" />
        </button>

        <button className="next-btn">
          <img src={iconAngleRight} alt="next button" />
        </button>
      </section>
    </section>
  );
}

export default UpperSection;
