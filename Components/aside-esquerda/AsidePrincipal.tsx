import React from "react";
import { AsidePerfil } from "./AsidePrincipalStyle";
import PersonPinRoundedIcon from "@material-ui/icons/PersonPinRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import MonochromePhotosRoundedIcon from "@material-ui/icons/MonochromePhotosRounded";
import FlareRoundedIcon from "@material-ui/icons/FlareRounded";

const AsidePrincipal = () => (
  <AsidePerfil>
    <figcaption className="figcaption">
      <img src="/perfil.jpg" alt="Logo" />
    </figcaption>
    <div className="boxNome">
      <h3>Ariel Sardinha</h3>
      <span>Masculino</span>
      <span>solteiro</span>
      <span>Brasil</span>
    </div>
    <div className="boxEditar">
      <div className="d-flex justify-between">
        <span className="d-flex align-center">
          <PersonPinRoundedIcon />
          <a>Perfil</a>
        </span>
        <a href="">editar</a>
      </div>
      <div>
        <MenuBookRoundedIcon />
        <a>Recado</a>
      </div>
      <div>
        <MonochromePhotosRoundedIcon />
        <a>Foto</a>
      </div>
      <div>
        <FlareRoundedIcon />
        <a>Depoimentos</a>
      </div>
    </div>
  </AsidePerfil>
);

export default AsidePrincipal;
