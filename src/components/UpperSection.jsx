import React, { useState, useRef, useEffect } from "react";

import BtnContainer from "./BtnContainer";
import Carousel from "./Carousel";
import ContextGrid from "./ContextGrid";
import MobileNav from "./MobileNav";
import DropDown from "./DropDown";

function UpperSection() {
  const [openDropDown, setopenDropDown] = useState(false);
  const [render, setRender] = useState(false);
  const [page, setPage] = useState(0);

  const carouselElem = useRef();

  useEffect(() => {
    window.addEventListener("keydown", handleArrowKey);

    return () => window.removeEventListener("keydown", handleArrowKey);
  }, []);

  const carousel = carouselElem.current;
  function handleSlideClick(e) {
    const attributeValue = e.target.getAttribute("data-button-next");

    if (carousel) {
      if (attributeValue) {
        if (page + 1 !== 3) {
          setPage((pageNum) => (pageNum += 1));
          carousel.classList.add("curr" + (page + 1));
        }
      } else {
        if (page - 1 !== -1) {
          setPage((pageNum) => (pageNum -= 1));
          if (carousel.classList.contains("curr" + page)) {
            carousel.classList.remove("curr" + page);
          }
        }
      }
    }
  }

  function handleArrowKey(e) {
    const key = e.key;

    if (carousel) {
      if (key === "ArrowRight") {
        if (page + 1 !== 3) {
          console.log("nexing");
          setPage((pageNum) => (pageNum += 1));
          carousel.classList.add("curr" + (page + 1));
        }
      } else if (key === "ArrowLeft") {
        if (page - 1 !== -1) {
          console.log("backing");
          setPage((pageNum) => (pageNum -= 1));
          if (carousel.classList.contains("curr" + page)) {
            carousel.classList.remove("curr" + page);
          }
        }
      }
    }
  }

  function handleOpenMenu() {
    setRender(true);
    setopenDropDown((prev) => !prev);
  }

  function handleAnimationEnd(e) {
    const name = e.animationName;

    if (name === "drop-down-close") {
      setRender(false);
    }
  }

  return (
    <section id="upper-section">
      {render && (
        <DropDown
          onClick={handleOpenMenu}
          animationEnd={handleAnimationEnd}
          openDropDown={openDropDown}
        />
      )}

      <section className="main-image-grid">
        <Carousel forwardedRef={carouselElem} />

        <MobileNav onClick={handleOpenMenu} />
      </section>

      <ContextGrid page={page} />

      <BtnContainer onClick={handleSlideClick} />
    </section>
  );
}

export default UpperSection;
