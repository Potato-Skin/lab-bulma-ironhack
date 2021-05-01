import React from "react";

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
        <p className="control">
          <a className="button is-info">Login</a>
        </p>
        <p className="control">
          <a className="button is-primary">Sign up</a>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
