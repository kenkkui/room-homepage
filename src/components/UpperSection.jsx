import React, { useState, useRef } from "react";
import iconArrow from "../images/icon-arrow.svg";
import logo from "../images/logo.svg";
import NavLinks from "./NavLinks";
import BtnContainer from "./BtnContainer";

import image1 from "../images/desktop-image-hero-1.jpg";
import image2 from "../images/desktop-image-hero-2.jpg";
import image3 from "../images/desktop-image-hero-3.jpg";

const PAGES = [
  {
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    title: "We are available all across the globe",
    text: "With storesf all over the world, it's easy for you to fiond furniture for your home or place of business. Locally, we're in the most major cities throughout the country. Find the branch neasrest using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    title: "Manufactured with the best materials",
    text: "Our modern furnitures store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experiences in this industry, we understand what customers want for their home and office.",
  },
];

function UpperSection() {
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

  return (
    <section id="upper-section">
      <section className="main-image-grid">
        <div className={`carousel`} ref={carouselElem}>
          <ul>
            <li className="slide">
              <img src={image1} alt="image" />
            </li>
            <li className="slide">
              <img src={image2} alt="image" />
            </li>
            <li className="slide">
              <img src={image3} alt="image" />
            </li>
          </ul>
        </div>

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
        <h1 className="main-context-title">{PAGES[page].title}</h1>
        <p className="main-context-text">{PAGES[page].text}</p>

        <a href="/" className="shop-now-link">
          shop now
          <img src={iconArrow} alt="Shop now!" />
        </a>
      </section>

      <BtnContainer onClick={handleClick} />
    </section>
  );
}

export default UpperSection;
