const steps = [
  {
    number: "01",
    title: "Send your document",
    text: "Share your file on WhatsApp or email. Tell us the language pair and deadline.",
  },
  {
    number: "02",
    title: "Get a clear quote",
    text: "We reply quickly with a fixed price and delivery time — no surprises.",
  },
  {
    number: "03",
    title: "Receive the translation",
    text: "Review the finished work. We revise for free until you are happy.",
  },
];

export default function Steps() {
  return (
    <section className="section steps">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">How It Works</span>
          <h2>Three simple steps</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step reveal">
              <span className="step-num">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
