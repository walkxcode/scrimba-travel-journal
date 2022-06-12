import React from "react";

import earth from "../assets/earth.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={earth} alt="Earth" className="navbar--image" />
      <h1 className="navbar--title">my travel journal.</h1>
    </nav>
  );
}

export default Navbar;
