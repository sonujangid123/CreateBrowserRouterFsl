import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1><Link to="/">Home</Link></h1>
      <ul>
        <Link to="/products">products</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/Contact">Contact</Link>
      </ul>
    </header>
  );
}

export default Header;
