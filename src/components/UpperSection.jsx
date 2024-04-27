import React, { useState, useRef } from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

import NavLinks from "./NavLinks";
import BtnContainer from "./BtnContainer";
import Carousel from "./Carousel";
import ContextGrid from "./ContextGrid";

function UpperSection() {
  const [openDropDown, setopenDropDown] = useState(false);
  const [page, setPage] = useState(0);
  const carouselElem = useRef();

  function handleClick(e) {
    const attributeValue = e.target.getAttribute("data-button-prev");
    const carousel = carouselElem.current;

    if (carousel) {
      if (attributeValue) {
        if (page - 1 !== -1) {
          setPage((pageNum) => (pageNum -= 1));
        }

        if (carousel.classList.contains("curr" + page)) {
          carousel.classList.remove("curr" + page);
        }
      } else {
        if (page + 1 !== 3) {
          setPage((pageNum) => (pageNum += 1));
        }

        carousel.classList.add("curr" + (page + 1));
      }
    }
  }

  function handleOpenMenu() {
    setopenDropDown((prev) => !prev);
  }

  return (
    <section id="upper-section">
      {openDropDown && (
        <section className="drop-down-menu">
          <div className="drop-down">
            <div className="close-icon" onClick={handleOpenMenu}>
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
      )}

      <section className="main-image-grid">
        <Carousel forwardedRef={carouselElem} />

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

        <nav className="mobile-navbar">
          <div className="hamburger">
            <img src={hamburger} alt="Menu Icon" onClick={handleOpenMenu} />
          </div>

          <div className="logo">
            <img src={logo} alt="Room" />
          </div>
        </nav>
      </section>

      <ContextGrid page={page} />

      <BtnContainer onClick={handleClick} />
    </section>
  );
}

export default UpperSection;
