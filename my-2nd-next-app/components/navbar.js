import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul
          className="menu-bar"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "20px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          <Link href="/blog/blog1">Blog</Link>

          <Link href="/product">Product</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
