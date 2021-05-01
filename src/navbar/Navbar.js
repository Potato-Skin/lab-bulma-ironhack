import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https:/bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          ></img>
        </a>
        <a class="navbar-item" href="#">
          Home
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-item navbar-end">
          <button class="button is-primary">Login</button>
          <button class="button is-info">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
