import { styled } from "@material-ui/core";
export const AsidePerfil = styled("div")`
  padding: 10px;
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  a,
  span {
    font-size: 0.8rem;
  }
  .figcaption {
    border-bottom: solid 1px #ecf2fa;
    padding-bottom: 10px;
    img {
      border-radius: 3px;
      width: 100%;
    }
  }
  div {
    display: flex;
    padding: 10px 0;
    width: 100%;
  }

  .boxNome {
    flex-direction: column;
    h3 {
      color: ${({ theme }) => theme.palette.primary.main};
    }
    span {
      color: gray;
    }
  }
  .boxEditar,
  .extra {
    flex-direction: column;
    border-top: solid 1px #ecf2fa;
    div {
      padding: 5px 0;
      align-items: center;
    }
    a {
      margin: 0 0 0 10px;
      color: ${({ theme }) => theme.palette.primary.light};
    }
    a:hover {
      text-decoration: underline;
    }
    svg {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;
