import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#0F93FE", color: "#ffff" }}
      >
        <div className="container mt-2 py-5">
          <div className="row text-start g-2 pt-5">
            <div className="col">
              <h1>Unsere Firma</h1>
              <p
                class="h6 pt-3"
                style={{ fontWeight: "100", lineHeight: "1.5rem" }}
              >
                Ich bin ein Textabschnitt. Klicken Sie hier, um Ihren eigenen
                Text hinzuzufügen und mich zu bearbeiten. Hier können Sie Ihren
                Besuchern mehr erzählen.
              </p>
            </div>
            <div className="col">
              <h2 style={{ fontWeight: "100" }}>Zentrale</h2>
              <p
                class="h6 pt-4"
                style={{ fontWeight: "100", lineHeight: "1.5rem" }}
              >
                Lindenstraße 507, 10555 Berlin <br />
                +49 (0) 456 7890 <br />
                info@website.com
              </p>
            </div>
            <div className="col">
              <h2 style={{ fontWeight: "100" }}>Betriebszeiten</h2>
              <p
                class="h6 pt-4"
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
