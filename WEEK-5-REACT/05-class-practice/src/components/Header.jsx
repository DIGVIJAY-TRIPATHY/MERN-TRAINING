import React from "react";
import "./Header.css";

function Header() {
  return (
    <section className="hhh">
      <div className="header">
        <h2 className="logo">rudra</h2>
        <nav className="menu">
          <li>
            <a href="#">x</a>
          </li>
          <li>
            <a href="#">y</a>
          </li>
          <li>
            <a href="#">z</a>
          </li>
        </nav>
        <nav className="icons">
          <li>
            <a href="#">🔍</a>
          </li>
          <li>
            <a href="#">👤</a>
          </li>
          <li>
            <a href="#">🛒</a>
          </li>
        </nav>
      </div>
    </section>
  );
}

export default Header;
