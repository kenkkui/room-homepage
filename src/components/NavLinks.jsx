import React from "react";

function NavLinks({ title }) {
  function handleMouseOver() {}

  return (
    <a href="/" onMouseOver={handleMouseOver}>
      {title}
    </a>
  );
}

export default NavLinks;
