import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      let current = "#home";
      document.querySelectorAll("section[id]").forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = `#${section.id}`;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`} id="header">
      <div className="container nav-wrap">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img src={logo} alt="We Translate logo" className="brand-logo" />
          <span className="brand-name">
            We <span>Translate</span>
          </span>
        </a>

        <nav className={`nav${menuOpen ? " open" : ""}`} id="nav">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${active === link.href ? " active" : ""}`}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={closeMenu}>
            Get a Quote
          </a>
        </nav>

        <button
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
