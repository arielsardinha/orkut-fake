import React from "react";
import { Container } from "@material-ui/core";
import { BoxGeral, BoxGap } from "./PaginaPrincipalStyle";
import AsidePrincipal from "../aside-esquerda/AsidePrincipal";
import PrincipalOqueFaze from "../oQueFazer/OqueFazer";

const PaginaPrincipal = () => (
  <BoxGeral>
    <Container maxWidth="xl">
      <BoxGap>
        <AsidePrincipal />
        <PrincipalOqueFaze />
        new
      </BoxGap>
    </Container>
  </BoxGeral>
);

export default PaginaPrincipal;
