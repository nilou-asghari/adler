import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FlipCard from "./FlipCard";
const Angebote = () => {
  const cards = [
    {
      imageSrc: "./hausmeister.jpg",
      title: "Hausmeister Service",
      description:
        "Zuverlässige Betreuung Ihrer Immobilie mit umfassenden Wartungs- und Reparaturdiensten.",
    },
    {
      imageSrc: "./boden.jpg",
      title: "Bodenbeschichtung",
      description:
        "Professionelle Versiegelung und Schutz für langlebige und gepflegte Bodenbeläge.",
    },
    {
      imageSrc: "./window.jpg",
      title: "Glassreinigung",
      description:
        "Streifenfreie Reinigung von Fenstern und Glasflächen für klare Sicht und strahlende Sauberkeit.",
    },
    {
      imageSrc: "./teppish.jpg",
      title: "Teppichreinigung",
      description:
        "Tiefenreinigung für Teppiche, die Schmutz und Flecken gründlich entfernt.",
    },
    {
      imageSrc: "./fassade.jpg",
      title: "Fassadenreinigung",
      description:
        "Fachgerechte Reinigung von Fassaden für ein makelloses Erscheinungsbild.",
    },
    {
      imageSrc: "./garden.jpg",
      title: "Gartenpflege",
      description:
        "Pflege und Gestaltung Ihres Gartens für eine grüne und ansprechende Umgebung.",
    },
    {
      imageSrc: "./treppen.jpg",
      title: "Treppenhausreinigung",
      description:
        "Regelmäßige Reinigung für ein einladendes und gepflegtes Treppenhaus.",
    },
    {
      imageSrc: "./solar.jpg",
      title: "solarreinigung",
      description:
        "Effiziente Reinigung von Solarmodulen zur Maximierung der Energieerzeugung.",
    },
    {
      imageSrc: "./car.jpg",
      title: "Autoreinigung",
      description:
        "Professionelle Innen- und Außenreinigung für ein strahlend sauberes Fahrzeug.",
    },
  ];
  return (
    <div id="services">
      <h1
        className="container text-center fw-bold mb-5 mt-5"
        style={{ color: "#0f93fe" }}
      >
        Unsere Angebote
      </h1>
      <div className="container d-flex align-items-center justify-content-center flex-wrap">
        {cards.map((card, index) => (
          <FlipCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Angebote;
