import React from "react";

const Location = () => {
  return (
    <div className="w-100 h-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5248.926528012025!2d8.195926775803082!3d48.86844457133356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47971d83cda49111%3A0x1d9de73bbb6df33e!2sPlittersdorfer%20Str.%205A%2C%2076437%20Rastatt!5e0!3m2!1sen!2sde!4v1731577614766!5m2!1sen!2sde"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
