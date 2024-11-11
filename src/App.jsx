import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Midsection from "./components/Midsection";

import Angebote from "./components/Angebote";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Midsection />

      <Angebote />

    </>
  );
}

export default App;
