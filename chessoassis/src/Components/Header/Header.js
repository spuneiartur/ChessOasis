import React from 'react';
import './Header.css';
import chessLogo from '../../Assets/Header/chess.png';

export default function Header() {
  return (
    <header className="header__wrapper">
      <div className="header__container">
        <a href="/" className="header__logo">
          <div className="header__logo-ibg _ibg">
            <img src={chessLogo} alt="Logo" className="header__logo-image" />
          </div>
          <h1 className="header__logo-title">ChessOasis.co</h1>
        </a>
        <div className="header__menu">
          <a href="/login">Our hotels</a>
          <a href="/login">Deals</a>
          <a href="/login">About us</a>
          <a href="/login">Book</a>
          <a href="/login">Testimonials</a>
        </div>
      </div>
    </header>
  );
}
