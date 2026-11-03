const services = [
  {
    title: "Document Translation",
    text: "Certificates, letters, contracts, IDs and official documents translated accurately with clean formatting.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
        <path d="M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    title: "Website & App Localisation",
    text: "Translate your website, app or product content so it feels natural to local customers, not machine-made.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
      </svg>
    ),
  },
  {
    title: "Certified Translations",
    text: "Official translations for embassies, universities and government offices, prepared to the required standard.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 19V5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        <path d="M8 9h6M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    title: "Business & Marketing",
    text: "Brochures, proposals, emails and ad copy translated with the right tone for your audience.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3a4 4 0 0 1 4 4v1a4 4 0 0 1 0 8v1a4 4 0 0 1-8 0v-1a4 4 0 0 1 0-8V7a4 4 0 0 1 4-4z" />
      </svg>
    ),
  },
  {
    title: "Interpretation Support",
    text: "Live interpretation for meetings, calls and events — clear communication in real time.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 11a9 9 0 0 1 18 0" />
        <rect x="2" y="11" width="4" height="7" rx="2" />
        <rect x="18" y="11" width="4" height="7" rx="2" />
        <path d="M20 18a4 4 0 0 1-4 3h-2" />
      </svg>
    ),
  },
  {
    title: "Proofreading & Editing",
    text: "Already translated? We review and polish it so the grammar, tone and meaning are spot on.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our Services</span>
          <h2>Translation done right, every time</h2>
          <p>Whatever the document, we make sure your meaning carries across clearly and naturally.</p>
        </div>

        <div className="grid-3">
          {services.map((service) => (
            <article key={service.title} className="card reveal">
              <div className="icon-box">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
