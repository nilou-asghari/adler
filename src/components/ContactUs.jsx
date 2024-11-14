import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Location from "./Location";
import ContactForm from "./ContactForm";
const ContactUs = () => {
  return (
    <div className="container-fluid " style={{ backgroundColor: "#f6f7f8" }}>
      <div className="container my-5 p-5">
        <h2 className="text-center text-primary mb-4">ANGEBOT EINHOLEN!</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <Location />
          </div>
          <div className="col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
