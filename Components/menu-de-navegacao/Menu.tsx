import React from "react";
import { Menu, BoxMenu } from "./MenuNavStyled";
import { Link } from "@material-ui/core";
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
            <Button>
              <a href="">Inicio</a>
            </Button>
            <Button>
              <a href="">Perfil</a>
            </Button>
            <Button>
              <a href="">Página de recados</a>
            </Button>
            <Button>
              <a href="">Comunidades</a>
            </Button>
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
          <input
            type="text"
            id="btnPesquisa"
            className="btnPesquisa"
            placeholder="Pesquisa no Orkut"
          />
        </ButtonGroup>
      </Box>
    </Container>
  </BoxMenu>
);

export default MenuDeNavegacao;
