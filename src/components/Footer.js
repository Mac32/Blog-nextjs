import React from "react";
import Link from "next/link";

export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <img
            className="navbar-item"
            src="https://i.ibb.co/c2KxvXH/Logo-completo-optimizado.jpg"
            width="112"
            height="28"
          />
        </Link>
        <div> Copyright© {year} Alberth Bompart </div>;
      </div>
    </nav>
  );
}
