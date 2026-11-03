import { WhatsAppIcon } from "./icons.jsx";

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/94704197762?text=Hi%20We%20Translate%2C%20I%20would%20like%20a%20quote"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
