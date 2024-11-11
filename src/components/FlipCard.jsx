import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FlipCard.css";

const FlipCard = ({ imageSrc, title, description }) => {
  return (
    <div className="box">
      <div className="body">
        <div className="imgContainer">
          <img src={imageSrc} alt="Card Image" />
        </div>
        <div className="content d-flex flex-column align-items-center justify-content-center">
          <div>
            <h4 className="text-white fs-1">{title}</h4>
            <p className="fs-6 text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
