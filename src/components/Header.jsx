// src/components/Header.jsx
import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="text-white text-xl mb-4">
      Abhishek@portfolio:~$ <span className="blinking-cursor">|</span>
    </div>
  );
};

export default Header;
