import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrustBar from "./components/TrustBar.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Steps from "./components/Steps.jsx";
import Reviews from "./components/Reviews.jsx";
import Contact from "./components/Contact.jsx";
import MapEmbed from "./components/MapEmbed.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import useScrollReveal from "./hooks/useScrollReveal.js";

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Steps />
      <Reviews />
      <Contact />
      <MapEmbed />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
