import React from "react";
import Link from "next/link";

export default function AppBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://i.ibb.co/c2KxvXH/Logo-completo-optimizado.jpg" />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">Inicio</a>
          </Link>
          <Link href="/About">
            <a className="navbar-item">Sobre</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
