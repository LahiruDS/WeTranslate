import logo from "../assets/we2.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#home" className="">
            <img src={logo} alt="We Translate logo" className="brand-logo" />
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
              <a href="tel:+94704197762">+94 70 419 7762</a>
            </li>
            <li>
              <a href="mailto:wetranzlat@gmail.com">wetranzlat@gmail.com</a>
            </li>
            <li>No. 266, Lake City, Ja-Ela</li>
            <li>Mon – Sat: 9 AM – 6 PM</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} We Translate. All rights reserved.</p>
        <p>Made  by  <a href="https://www.linkedin.com/in/lahiru-de-silva-86b0b1329/">Lahiru De Silva</a>  for  We Translate | Ja-Ela</p>
      </div>
    </footer>
  );
}
