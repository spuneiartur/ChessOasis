import React from 'react';
import './Header.css';

export default function Header() {
  const linksClickHandler = e => {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    if (e.target.tagName === 'A') {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header__wrapper">
      <div className="header__container">
        <a href="/" className="header__logo">
          <div className="header__logo-ibg _ibg">
            <img
              src={'/Assets/Header/chess.png'}
              alt="Logo"
              className="header__logo-image"
            />
          </div>
          <h1 className="header__logo-title">ChessOasis.co</h1>
        </a>
        <div className="header__menu" onClick={linksClickHandler}>
          <a href="#hotels-section">Our hotels</a>
          <a href="#deals-section">Deals</a>
          <a href="#about-section">About us</a>
          <a href="#booknow-section">Book</a>
          <a href="#testimonials-section">Testimonials</a>
        </div>
      </div>
    </header>
  );
}
