import React from "react";
import { Link } from "react-router-dom";

export default function PageError() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>Pagina não encontrada</h2>
      <Link
        style={{
          color: "white",
        }}
        to="/"
      >
        Voltar a Pagina incial
      </Link>
    </div>
  );
}
