import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <h1>Codelifings</h1>
        <p className="desc">
          Terima Jasa Pembuatan Landing Page dan Web Company
        </p>
        <p>
          dari Babakan Ciparay, Bandung, Indonesia | WA +62-895-0832-0163 |{" "}
          <a
            style={{ color: "white" }}
            className="nisa"
            href="https://nisacodelifings.netlify.com"
          >
            &copy; Annisa Puspitasari
          </a>
        </p>
      </div>
    </header>
  );
}
