import React from "react";
import "./Navbar.css";

import CoolButton from "../coolbutton/CoolButton";

function Navbar() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma logo"
            width="112"
            height="28"
          />
        </a>
        <a className="navbar-item" href="https://bulma.io">
          Home
        </a>
      </div>
      <div className="navbar-end">
        <CoolButton className="is-info">Login</CoolButton>
        <CoolButton className="is-primary">Sign up</CoolButton>
      </div>
    </nav>
  );
}

export default Navbar;
