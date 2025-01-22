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
         alt: "Hausmeister Service - Zuverlässige Betreuung Ihrer Immobilie"
    },
    {
      imageSrc: "./boden.jpg",
      title: "Bodenbeschichtung",
      description:
        "Professionelle Versiegelung und Schutz für langlebige und gepflegte Bodenbeläge.",
         alt: "Bodenbeschichtung Service - Zuverlässige Betreuung Ihrer Immobilie"
    },
    {
      imageSrc: "./window.jpg",
      title: "Glassreinigung",
      description:
        "Streifenfreie Reinigung von Fenstern und Glasflächen für klare Sicht und strahlende Sauberkeit.",
        alt: "Glassreinigung Service - Zuverlässige Betreuung Ihrer Immobilie"
      },
    {
      imageSrc: "./teppish.jpg",
      title: "Teppichreinigung",
      description:
        "Tiefenreinigung für Teppiche, die Schmutz und Flecken gründlich entfernt.",
        alt: "Teppichreinigung Service - Zuverlässige Betreuung Ihrer Immobilie"
      },
    {
      imageSrc: "./fassade.jpg",
      title: "Fassadenreinigung",
      description:
 
      "Fachgerechte Reinigung von Fassaden für ein makelloses Erscheinungsbild.",
      alt: "Fassadenreinigung Service - Zuverlässige Betreuung Ihrer Immobilie"
    },
    {
      imageSrc: "./garden.jpg",
      title: "Gartenpflege",
      description:
        "Pflege und Gestaltung Ihres Gartens für eine grüne und ansprechende Umgebung.",
        alt: "Gartenpflege Service - Zuverlässige Betreuung Ihrer Immobilie"
      },
    {
      imageSrc: "./treppen.jpg",
      title: "Treppenhausreinigung",
      description:
        "Regelmäßige Reinigung für ein einladendes und gepflegtes Treppenhaus.",
        alt: "Treppenhausreinigung Service - Zuverlässige Betreuung Ihrer Immobilie"
      },
    {
      imageSrc: "./solar.jpg",
      title: "solarreinigung",
      description:
        "Effiziente Reinigung von Solarmodulen zur Maximierung der Energieerzeugung.",
        alt: "solarreinigung Service - Zuverlässige Betreuung Ihrer Immobilie"
      },
    {
      imageSrc: "./car.jpg",
      title: "Autoreinigung",
      description:
        "Professionelle Innen- und Außenreinigung für ein strahlend sauberes Fahrzeug.",
        alt: "Autoreinigung Service - Zuverlässige Betreuung Ihrer Immobilie"
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
