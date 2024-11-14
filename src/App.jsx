import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Midsection from "./components/Midsection";
import Angebote from "./components/Angebote";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Midsection />
      <Angebote />
      <ContactUs />
    </>
  );
}

export default App;
