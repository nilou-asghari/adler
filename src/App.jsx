import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Midsection from "./components/Midsection";
import Angebote from "./components/Angebote";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { HelmetProvider,Helmet } from "react-helmet-async";
function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
        Adler Gebäude Reinigung - Professionelle Reinigungslösungen
        </title>
        <meta
          name="description"
          content="Adler Gebäude Reinigung bietet professionelle und umweltbewusste Reinigungsdienste für Haushalte, Gewerbe und Industrie."
        />
        <meta
          name="keywords"
          content="Gebäudereinigung, Hausmeisterservice, Bodenbeschichtung, Fensterreinigung, Fassadenreinigung, Gartenpflege"
        />
        <meta name="author" content="Adler Gebäude Reinigung" />
      </Helmet>
      <Header />
      <Hero id="home" />
      <Midsection />
      <Angebote id="services" />
      <ContactUs id="contact" />
      <Footer />
    </HelmetProvider>
  );
}

export default App;
