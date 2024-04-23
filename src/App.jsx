import React from "react";
import "./index.css";
import iconAngleLeft from "./images/icon-angle-left.svg";
import iconAngleRight from "./images/icon-angle-right.svg";

function App() {
  return (
    <main id="app">
      <section id="upper-section">
        <section className="main-image-grid"></section>
        <section className="main-context-grid"></section>

        <section className="btn-container">
          <button className="prev-btn">
            <img src={iconAngleLeft} alt="previous button" />
          </button>

          <button className="next-btn">
            <img src={iconAngleRight} alt="next button" />
          </button>
        </section>
      </section>

      <section id="lower-section">
        <section className="about-our-furniture"></section>
      </section>
    </main>
  );
}

export default App;
