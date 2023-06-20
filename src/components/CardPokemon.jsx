import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DivCard } from "../styles";

export default function CardPokemon({ data }) {
  const [infoPokemon, setInfoPokemon] = useState(null);

  const pokemonId = data.url.split("/").slice(-2, -1)[0];

  useEffect(() => {
    axios.get(data.url).then((response) => {
      setInfoPokemon(response.data);
    });
  }, []);
  if (infoPokemon === null) {
    return;
  }

  return (
    <DivCard>
      <h4 className="pokemonName">{infoPokemon.name}</h4>

      <img src={infoPokemon.sprites.front_default} alt={infoPokemon.name} />
      <Link to={`/details/${pokemonId}`}>Detalhes</Link>
    </DivCard>
  );
}
