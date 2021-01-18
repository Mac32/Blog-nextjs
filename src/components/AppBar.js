import React, {useState}  from "react";
import Link from "next/link";

export default function AppBar() {

const [isActive, setisActive] = useState(false);
  //

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img src="https://i.ibb.co/c2KxvXH/Logo-completo-optimizado.jpg" />
          </a>
        </Link>

        <a
	  onClick={() => {
	    setisActive(!isActive);
	  }
	  }
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample"className={`navbar-menu ${isActive ? "is-active" : ""}`}>
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
