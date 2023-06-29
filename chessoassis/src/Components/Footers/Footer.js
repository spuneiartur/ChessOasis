import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="footer__section">
      <div className="footer__container _container">
        <a href="">
          <h2>ChessOasis.co</h2>
        </a>

        <div className="footer__socials">
          <a href="https://www.instagram.com/chesscoders/">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </a>
          <a href="https://www.facebook.com/chesscoders/?locale=ro_RO">
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
          </a>
          <a href="https://www.linkedin.com/company/chesscoders/">
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
          </a>
          <a href="https://chesscoders.com/">
            <FontAwesomeIcon icon="fa-solid fa-globe" />
          </a>
        </div>
        <p>
          Travel makes one modest. You see what a tiny place you occupy in the
          world.
        </p>
        <p>
          Copyright © {new Date().getFullYear()} ChessOasis.co. All rights
          reserved{' '}
        </p>
      </div>
    </footer>
  );
}
