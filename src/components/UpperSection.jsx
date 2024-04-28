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
  const [x, setX] = useState({
    startX: "",
    endX: "",
  });

  useEffect(() => {
    function handleTouchStart(e) {
      setX((prev) => {
        const updatedValues = {
          ...prev,
          startX: e.touches[0].clientX,
        };

        return updatedValues;
      });
    }

    function handleTouchEnd(e) {
      setX((prev) => {
        const updatedValues = {
          ...prev,
          endX: e.changedTouches[0].clientX,
        };
      });

      const deltaX = x.endX - x.startX;

      if (deltaX > 0) {
        setPage((pageNum) => (pageNum - 1 + 3) % 3);
      } else if (deltaX < 0) {
        setPage((pageNum) => (pageNum + 1) % 3);
      }
    }

    document.addEventListener("keydown", handleArrowKey);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("keydown", handleArrowKey);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  function handleSlideClick(btnNum) {
    if (btnNum === 2) {
      setPage((pageNum) => (pageNum + 1) % 3);
    } else {
      setPage((pageNum) => (pageNum - 1 + 3) % 3);
    }
  }

  function handleArrowKey(e) {
    const key = e.key;

    if (key === "ArrowRight") {
      setPage((pageNum) => (pageNum + 1) % 3);
    } else if (key === "ArrowLeft") {
      setPage((pageNum) => (pageNum - 1 + 3) % 3);
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
        <Carousel page={page} />

        <MobileNav onClick={handleOpenMenu} />
      </section>

      <ContextGrid page={page} />

      <BtnContainer onClick={handleSlideClick} />
    </section>
  );
}

export default UpperSection;
