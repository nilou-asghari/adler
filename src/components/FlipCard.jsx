import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FlipCard.css";

const FlipCard = ({ imageSrc, title, description,alt }) => {
  return (
    <div className="box">
      <div className="body">
        <div className="imgContainer">
          <img src={imageSrc} alt={alt} />
        </div>
        <div className="content d-flex flex-column align-items-center justify-content-center">
          <div>
            <h4 className="text-white ">{title}</h4>
            <p className=" text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
