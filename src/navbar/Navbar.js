import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https:/bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          ></img>
        </a>
        <a className="navbar-item" href="#">
          Home
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-item navbar-end">
          <button className="button is-primary">Login</button>
          <button className="button is-info">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
