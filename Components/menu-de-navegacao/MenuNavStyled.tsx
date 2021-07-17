import { styled } from "@material-ui/core";

export const BoxMenu = styled("div")`
  background-color: ${({ theme }) => theme.palette.primary.light};
  .btnDireita {
    p {
      color: #2f4a71;
      font-weight: 800;
      margin-right: 20px;
    }
    label {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        color: white;
      }
    }
    .btnPesquisa {
      background-color: white;
      width: 150px;
      border: none;
      height: 25px;
      border-radius: 10px;
      text-align: center;
      &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
        padding: 0 10px;
      }
    }
  }
  button {
    padding: 0 10px;
    &:hover {
      color: white;
    }
  }
`;
export const Menu = styled("nav")`
  display: flex;
  h1 {
    background-color: white;
    border-radius: 15px;
    padding: 0 15px;
    color: #d81d99;
    font-weight: 800;
  }
`;
