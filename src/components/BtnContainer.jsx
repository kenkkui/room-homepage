import React from "react";
import iconAngleLeft from "../images/icon-angle-left.svg";
import iconAngleRight from "../images/icon-angle-right.svg";

function BtnContainer() {
  return (
    <section className="btn-container">
      <button className="prev-btn">
        <img src={iconAngleLeft} alt="previous button" />
      </button>

      <button className="next-btn">
        <img src={iconAngleRight} alt="next button" />
      </button>
    </section>
  );
}

export default BtnContainer;
