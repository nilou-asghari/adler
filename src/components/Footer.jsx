import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div
        className="container-fluid customFooter"
        style={{ backgroundColor: "#0F93FE", color: "#ffff" }}
      >
        <div className="container mt-2 py-5">
          <div className="row text-start g-2 pt-5">
            <div className="ccol-sm-12 col-md">
              <h1>Unsere Firma</h1>
              <p
                class="h6 pt-3"
                style={{ fontWeight: "100", lineHeight: "1.5rem" }}
              >
                Bei Adler Gebäude Reinigung steht die Kundenzufriedenheit an
                erster Stelle. Mit langjähriger Erfahrung bieten wir
                maßgeschneiderte Reinigungslösungen für Privathaushalte, Gewerbe
                und Industrie. Vertrauen Sie auf unsere Professionalität und
                Liebe zum Detail – für Sauberkeit, die überzeugt.
              </p>
            </div>
            <div className="col-sm-12 col-md">
              <h2 style={{ fontWeight: "100" }}>Zentrale</h2>
              <p
                class="h6 pt-4"
                style={{ fontWeight: "100", lineHeight: "1.5rem" }}
              >
                Plittersdorfer Straße 5a , 76437 Rastatt <br />
                +49 (0) 163 1011391 <br />
               
              </p>
            </div>
            <div className="col-sm-12 col-md">
              <h2 style={{ fontWeight: "100" }}>Betriebszeiten</h2>
              <p
                className="h6 pt-4"
                style={{ fontWeight: "100", lineHeight: "1.5rem" }}
              >
                Mo. bis Fr.: 8 - 20 Uhr <br />
                Sa. : 9 - 19 Uhr <br />
                So. : 9 - 20 Uhr
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid "
        style={{ backgroundColor: "#ffffff", color: "#0F93FE" }}
      >
        <div className="container d-flex justify-content-center g-2">
          <a
            href="/impressum"
            className="me-3 mx-3"
            style={{ textDecoration: "none", color: "#0F93FE" }}
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="me-3 mx-3"
            style={{ textDecoration: "none", color: "#0F93FE" }}
          >
            Datenschutz
          </a>
          <a
            href="/agb"
            className="mx-3"
            style={{ textDecoration: "none", color: "#0F93FE" }}
          >
            AGB
          </a>
        </div>
        <div className="text-center">
          <small>
            {"© 2024 Adler Gebäude Reinigung. Alle Rechte vorbehalten. "}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
