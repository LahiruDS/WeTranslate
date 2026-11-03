const items = [
  "Legal Documents",
  "Business & Contracts",
  "Websites & Apps",
  "Certificates",
  "Personal Letters",
];

export default function TrustBar() {
  return (
    <div className="trustbar">
      <div className="container trust-wrap">
        <span>Trusted for</span>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
