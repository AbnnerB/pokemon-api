import styled from "styled-components";

import fundoCampo from "../src/assets/fundoCampo.jpg";

//Estilos Pagina Home
export const ContainerHome = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgLogoPokemon = styled.img`
  width: 40%;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 20px auto;
  gap: 1.5rem;
`;

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 10px;
  border: 2px solid #002b44;
  padding: 2rem 0;
  width: calc(100% / 4);
  min-width: 200px;
  color: #121163;
  background-color: #f9ff52;

  a {
    text-decoration: none;
    color: gray;
  }
`;
//Estilos Pagina Home

//estilos pagina details
export const ContainerDetails = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 380px;
  margin: 0 auto;

  article {
    position: absolute;
    font-size: 2rem;
    top: 20px;
    left: 20px;
  }

  article a {
    color: white;
  }

  .imgLogoPageDetails {
    margin-top: 10px;
    width: 60%;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.3rem;
  }

  .buttons button {
    outline: none;
    background-color: #ffd12c;
    color: brown;
    font-weight: bold;
    font-size: 1.3rem;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    cursor: pointer;
    border: 2px solid #1756a4;
    box-shadow: 2px 1px 1px 2px #292929;
  }

  .buttons button:active {
    box-shadow: 0px 0px 0px 0px black;
  }
`;

export const ContainerCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #ff8a32;
  width: 100%;
  margin-top: 10px;
  position: relative;
  /* border: 2px solid black; */
  border: 10px solid #ffd12c;
  border-radius: 10px;

  img {
    background-color: yellow;
    width: 100%;
    background-image: url(${fundoCampo});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .buttonToSpin {
    position: absolute;
    top: 45%;
    right: 10px;

    cursor: pointer;
    border: none;
    background-color: transparent;
    color: white;
    font-size: 2rem;
  }

  .infoPokemon {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: 20px;
  }
  .infoPokemon p span {
    font-weight: bold;
  }
`;
