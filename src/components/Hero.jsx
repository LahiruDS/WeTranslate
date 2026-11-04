import { MailIcon, WhatsAppIcon } from "./icons.jsx";

const whatsappLink =
  "https://wa.me/94704197762?text=Hi%20We%20Translate%2C%20I%20would%20like%20a%20quote";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="container hero-grid">
        <div className="hero-media reveal">
          <div className="media-main">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80"
              alt="Books and dictionaries used for translation"
              loading="eager"
            />
          </div>
          <div className="media-card media-a">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
              alt="Translation team working together"
              loading="lazy"
            />
          </div>
          <div className="media-card media-b">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
              alt="Writing a translated document"
              loading="lazy"
            />
          </div>
          <div className="media-badge">
            <span className="badge-num">10+</span>
            <span className="badge-txt">
              Years of
              <br />
              experience
            </span>
          </div>
        </div>

        <div className="hero-content reveal">
          <span className="pill">Sinhala · Tamil · English · Italian · more</span>
          <h1>
            Your words, <span className="accent">perfectly</span> translated.
          </h1>
          <p>
            Professional sworn and certified translation services for official documents, personal records, business documents and more. We help individuals and businesses across Sri Lanka with clear, accurate and reliable translations.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
            <a className="btn btn-outline" href="mailto:ceylonlpo@gmail.com">
              <MailIcon />
              Email Us
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <strong>15K+</strong>
              <span>Documents translated</span>
            </div>
            <div className="stat">
              <strong>4.9/5</strong>
              <span>Client rating</span>
            </div>
            <div className="stat">
              <strong>24h</strong>
              <span>Average delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
