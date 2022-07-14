import React from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h2>PIECES</h2>
        </div>
        <nav className="header__nav nav">
          <ul className="nav__menu">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/books" className="nav__link">
                Books
              </Link>
            </li>
          </ul>
        </nav>
        <Auth></Auth>
      </div>
    </header>
  );
};

export default Header;
