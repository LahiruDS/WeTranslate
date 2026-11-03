import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#home" className="brand brand--light">
            <img src={logo} alt="We Translate logo" className="brand-logo" />
            <span className="brand-name">
              We <span>Translate</span>
            </span>
          </a>
          <p className="footer-about">
            Professional translation services in Sinhala, Tamil, English and more. Fast, accurate
            and always human.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Get in Touch</h4>
          <ul className="footer-links">
            <li>
              <a href="tel:+94771234567">+94 77 123 4567</a>
            </li>
            <li>
              <a href="mailto:hello@wetranslate.lk">hello@wetranslate.lk</a>
            </li>
            <li>No. 25, Negombo Road, Ja-Ela</li>
            <li>Mon – Sat: 9 AM – 6 PM</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} We Translate. All rights reserved.</p>
        <p>Made with care in Sri Lanka 🇱🇰</p>
      </div>
    </footer>
  );
}
