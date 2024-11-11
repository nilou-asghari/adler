import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FlipCard from "./FlipCard";
const Angebote = () => {
  const cards = [
    {
      imageSrc: "./hausmeister.jpg",
      title: "Hausmeister Service",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageSrc: "./boden.jpg",
      title: "Bodenbeschichtung",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageSrc: "./window.jpg",
      title: "Glassreinigung",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageSrc: "./teppish.jpg",
      title: "Teppichreinigung",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageSrc: "./fassade.jpg",
      title: "Fassadenreinigung",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageSrc: "./garden.jpg",
      title: "Gartenpflege",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageSrc: "./treppen.jpg",
      title: "Treppenhausreinigung",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageSrc: "./solar.jpg",
      title: "solarreinigung",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imageSrc: "./car.jpg",
      title: "Autoreinigung",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <>
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
    </>
  );
};

export default Angebote;
