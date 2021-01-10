import React from "react";
import Link from "next/link";

export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link href="/">
          <img class="navbar-item" 
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </Link>
        <div> Copyright© {year} Alberth Bompart </div>;
      </div>
    </nav>
  );
}
