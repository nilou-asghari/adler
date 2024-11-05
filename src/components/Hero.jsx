import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css"; // Import your custom CSS file

const Hero = () => {
  return (
    <div>
      <div className="container-fluid text-center customHero">
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
          }}
        >
          Für strahlende Sauberkeit, <br />
          auf die Sie bauen können
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
          }}
        >
          Adler Gebäude Reinigung – Ihre Lösung für perfekte Reinheit.
        </p>
        <button type="button" className="customBtn mt-xl-4 rounded-1">
          Angebot einholen
        </button>
      </div>
      <div
        className="container text-center mx-auto p-xl-5"
        style={{
          color: "#0f93fe",
          letterSpacing: "0.2em",
        }}
      >
        <h3
          style={{
            fontWeight: "200",
          }}
        >
          Anrufen: +49 (0) 1631011391
        </h3>
      </div>
    </div>
  );
};

export default Hero;
