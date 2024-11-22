import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Midsection from "./components/Midsection";
import Angebote from "./components/Angebote";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero id="home" />
      <Midsection />
      <Angebote id="services" />
      <ContactUs id="contact" />
      <Footer />
    </>
  );
}

export default App;
