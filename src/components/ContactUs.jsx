import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUs.css";
import Location from "./Location";
import ContactForm from "./ContactForm";
const ContactUs = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div
        className="container-fluid text-center p-xl-5 p-sm-4"
        style={{
          color: "#0F93FE",
          letterSpacing: "0.2em",
          backgroundColor: "#deff4f",
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
      <div className="container-fluid m-0 p-0 ">
        <div className="container ">
          <h2 className="text-center text-primary p-xl-5 p-sm-4 mb-4">
            Angebot Einholen!
          </h2>
          <div className="row">
            <div className="col-md-6">
              <Location />
            </div>
            <div className="col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
