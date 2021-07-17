import React from "react";
import { Menu, BoxMenu } from "./MenuNavStyled";
import {
  ButtonGroup,
  Button,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
const MenuDeNavegacao = () => (
  <BoxMenu>
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0",
        }}
      >
        <Menu>
          <Typography component="h1" variant="h5">
            ORKUT-FAKE
          </Typography>
          <ButtonGroup
            size="small"
            variant="text"
            aria-label="small button group"
            sx={{
              alignItems: "center",
            }}
          >
            <Button href="">Inicio</Button>
            <Button href="">Perfil</Button>
            <Button href="">Página de recados</Button>
            <Button href="">Comunidades</Button>
          </ButtonGroup>
        </Menu>
        <ButtonGroup
          size="small"
          variant="text"
          aria-label="small button group"
          sx={{
            alignItems: "center",
          }}
          className="btnDireita"
        >
          <p>email@email</p>
          <Button href="">Sair</Button>
          <label htmlFor="btnPesquisa">
            <SearchIcon />
          </label>
          <input type="text" id="btnPesquisa" className="btnPesquisa" placeholder="Pesquisa no Orkut"/>
        </ButtonGroup>
      </Box>
    </Container>
  </BoxMenu>
);

export default MenuDeNavegacao;
