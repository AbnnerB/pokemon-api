import { useState, useEffect } from "react";
import axios from "axios";
import CardPokemon from "../components/CardPokemon";
import { ContainerHome, ContainerCards } from "../styles";

export default function Home() {
  const [listPok, setListPok] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      setListPok(response.data.results);
      console.log(response.data.results);
    });
  }, []);

  return (
    <ContainerHome>
      <h1>Pokemon api</h1>
      <ContainerCards>
        {listPok.map((item, index) => (
          <CardPokemon key={index} data={item} />
        ))}
      </ContainerCards>
    </ContainerHome>
  );
}
