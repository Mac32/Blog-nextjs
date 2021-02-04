import React from "react";
import Link from "next/link";

export default function Footer() {
  let year = new Date().getFullYear();

  return (
      <div className="bg-gray-800 flex">
        <Link href="/">
          <img
            className="navbar-item"
            src="https://i.ibb.co/FJh5fnW/Logo-completo-min.png"
            width="112"
            height="28"
          />
        </Link>
        <div className="text-gray-300 my-auto"> Copyright© {year} Alberth Bompart </div>
      </div>
  );
}
