import { useState, useEffect } from "react";
import axios from "axios";

import CardPokemon from "../components/CardPokemon";
import { ContainerHome, ContainerCards, ImgLogoPokemon } from "../styles";

import pokemonLogo from "../assets/pokemonLogo.png";

export default function Home() {
  const [listPok, setListPok] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      setListPok(response.data.results);
    });
  }, []);

  return (
    <ContainerHome>
      <ImgLogoPokemon src={pokemonLogo} alt="Pokemon Logo" />

      <ContainerCards>
        {listPok?.map((item, index) => (
          <CardPokemon key={index} data={item} />
        ))}
      </ContainerCards>
    </ContainerHome>
  );
}
