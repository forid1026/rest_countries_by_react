import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-menu">
      <div className="logo">
      <a href="#">
        <h2>Farid</h2>
      </a>
      </div>
      <div className="menu-list">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/service">Service</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
