import React from "react";
import logo from "../assets/logo2.png";

export const Header = () =>{

  return (
    <header className="App">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Logo" />
        <nav className="header__nav">
          <a href="/" className="app">Home</a>
        </nav>
      </div>
    </header>
  );
};

