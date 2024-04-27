import React from "react";
import iconArrow from "../images/icon-arrow.svg";

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

function ContextGrid({ page }) {
  return (
    <section className="main-context-grid">
      <h1 className="main-context-title">{PAGES[page].title}</h1>
      <p className="main-context-text">{PAGES[page].text}</p>

      <a href="/" className="shop-now-link">
        shop now
        <img src={iconArrow} alt="Shop now!" />
      </a>
    </section>
  );
}

export default ContextGrid;
