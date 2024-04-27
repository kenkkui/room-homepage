import React from "react";
import iconAngleLeft from "../images/icon-angle-left.svg";
import iconAngleRight from "../images/icon-angle-right.svg";

function BtnContainer({ onClick }) {
  return (
    <section className="btn-container">
      <button className="prev-btn" onClick={onClick} data-button-prev="true">
        <img src={iconAngleLeft} alt="previous button" />
      </button>

      <button className="next-btn" onClick={onClick} data-button-next="true">
        <img src={iconAngleRight} alt="next button" />
      </button>
    </section>
  );
}

export default BtnContainer;
