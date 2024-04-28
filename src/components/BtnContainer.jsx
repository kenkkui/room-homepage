import React from "react";
import iconAngleLeft from "../images/icon-angle-left.svg";
import iconAngleRight from "../images/icon-angle-right.svg";

function BtnContainer({ onClick }) {
  return (
    <section className="btn-container">
      <button className="prev-btn" onClick={(e) => onClick(1, e)}>
        <img src={iconAngleLeft} alt="previous button" />
      </button>

      <button className="next-btn" onClick={(e) => onClick(2, e)}>
        <img src={iconAngleRight} alt="next button" />
      </button>
    </section>
  );
}

export default BtnContainer;
