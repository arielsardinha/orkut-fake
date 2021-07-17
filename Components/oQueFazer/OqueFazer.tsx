import React from "react";
import { BoxConteudo } from "./OqueFazerStyle";

const PrincipalOqueFazer = () => (
  <div>
    <BoxConteudo>
      <div className="bemVindo">
        <h2>Bem-Vindo(a),{`${"Ariel"}`}</h2>
        <p>
          <span>Sorte de hoje:</span> {"mensagem aleatoria"}
        </p>
      </div>
      <div className="icones"></div>
    </BoxConteudo>
  </div>
);

export default PrincipalOqueFazer;
