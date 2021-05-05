import React from "react";
import CoolButton from "../coolButton/CoolButton";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          ></img>
        </a>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div>
      </div>
      <div className="buttons">
        <CoolButton className="is-info">Login</CoolButton>
        <CoolButton className="is-primary">Signup</CoolButton>
      </div>
    </nav>
  );
}

export default Navbar;
