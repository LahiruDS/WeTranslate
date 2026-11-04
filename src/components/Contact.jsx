import { WhatsAppIcon } from "./icons.jsx";

const whatsappLink =
  "https://wa.me/94704197762?text=Hi%20We%20Translate%2C%20I%20would%20like%20a%20quote";

const info = [
  {
    icon: "📍",
    title: "Location",
    body: "No. 266, Lake City, Ja-Ela, Sri Lanka",
  },
  {
    icon: "📞",
    title: "Phone / WhatsApp",
    body: (
      <a href="tel:+94704197762">+94 70 419 7762</a>
    ),
  },
  {
    icon: "✉️",
    title: "Email",
    body: <a href="mailto:wetranzlat@gmail.com">wetranzlat@gmail.com</a>,
  },
  {
    icon: "🕘",
    title: "Opening Hours",
    body: (
      <>
        Mon – Sat: 9:00 AM – 6:00 PM
        <br />
        Sunday: Closed
      </>
    ),
  },
];

const services = [
  "Document Translation",
  "Certified Translation",
  "Website / App Localisation",
  "Business & Marketing",
  "Interpretation Support",
  "Proofreading & Editing",
];

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const phone = data.get("phone") || "Not provided";
    const email = data.get("email");
    const service = data.get("service");
    const message = data.get("message");

    const subject = encodeURIComponent(`Translation Request - ${service} - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:wetranzlat@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Contact</span>
          <h2>Let’s get your translation started</h2>
          <p>Send us a message on WhatsApp or email — we usually reply within an hour.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            {info.map((item) => (
              <div key={item.title} className="info-item">
                <span className="info-icon">{item.icon}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}

            <div className="contact-buttons">
              <a
                className="btn btn-whatsapp"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
              <a
                className="btn btn-outline"
                href="mailto:wetranzlat@gmail.com?subject=Translation%20Quote%20Request"
              >
                Send an Email
              </a>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="+94 7X XXX XXXX" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="you@example.com" required />
            </div>
            <div className="field">
              <label htmlFor="service">Service Needed</label>
              <select id="service" name="service">
                {services.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us about your document and languages..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Send Message
            </button>
            <p className="form-note">This opens your email app with the message ready to send.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
