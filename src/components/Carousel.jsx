import React from "react";

import image1 from "../images/desktop-image-hero-1.jpg";
import image2 from "../images/desktop-image-hero-2.jpg";
import image3 from "../images/desktop-image-hero-3.jpg";

import mobileImg1 from "../images/mobile-image-hero-1.jpg";
import mobileImg2 from "../images/mobile-image-hero-2.jpg";
import mobileImg3 from "../images/mobile-image-hero-3.jpg";

function Carousel({ forwardedRef }) {
  return (
    <div className="carousel" ref={forwardedRef}>
      <ul>
        <li className="slide">
          <img src={image1} alt="image" data-desktop-img="true" />
          <img src={mobileImg1} alt="image" data-mobile-img="true" />
        </li>
        <li className="slide">
          <img src={image2} alt="image" data-desktop-img="true" />
          <img src={mobileImg2} alt="image" data-mobile-img="true" />
        </li>
        <li className="slide">
          <img src={image3} alt="image" data-desktop-img="true" />
          <img src={mobileImg3} alt="image" data-mobile-img="true" />
        </li>
      </ul>
    </div>
  );
}

export default Carousel;
