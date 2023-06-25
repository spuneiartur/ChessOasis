import React from 'react';
import './Welcome.css';
import Header from '../../Components/Header/Header';
import ButtonForImages from '../../Components/Buttons/ButtonForImages';

export default function Welcome() {
  return (
    <section className="welcome__section">
      <div className="welcome__bg _ibg">
        <img
          src={'/Assets/Welcome/welcome_bg.jpg'}
          className="welcome__bg-image"
          alt="Background"
        />
        <div className="welcome__container _container">
          <Header />
          <div className="welcome__content">
            <h1 className="welcome__title">ChessOasis</h1>
            <p className="welcome__text">
              Welcome to ChessOasis, your gateway to exquisite accommodations,
              personalized service, and unforgettable travel experiences.
            </p>
            <ButtonForImages text={'Read more'} />
          </div>
        </div>
      </div>
    </section>
  );
}
