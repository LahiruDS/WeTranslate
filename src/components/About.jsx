const points = [
  "Native-level translators in Sinhala, Tamil and English",
  "Fast turnaround with careful quality checks",
  "Confidential handling of every document",
  "Fair, transparent pricing with no hidden fees",
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-media reveal">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
            alt="Translators collaborating at a table"
            loading="lazy"
          />
          <div className="about-float">
            <strong>100%</strong>
            <span>Human translation</span>
          </div>
        </div>

        <div className="about-content reveal">
          <span className="eyebrow">About We Translate</span>
          <h2>Language should never be a barrier</h2>
          <p>
            We are a Sri Lankan translation team helping people and businesses communicate
            across languages. Every project is handled by a real translator who understands both
            the language and the culture behind it.
          </p>
          <ul className="check-list">
            {points.map((point) => (
              <li key={point}>
                <span>✓</span> {point}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary">
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}
