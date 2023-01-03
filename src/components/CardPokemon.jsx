import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DivCard } from "../styles";

export default function CardPokemon({ data }) {
  const [urlPokemon, setUrlPokemon] = useState(null);

  useEffect(() => {
    axios.get(data.url).then((response) => {
      setUrlPokemon(response.data);
    });
  }, []);
  if (urlPokemon === null) {
    return;
  }
  // console.log(urlPokemon);

  return (
    <DivCard>
      <h4 className="pokemonName">{urlPokemon.name}</h4>

      <img src={urlPokemon.sprites.front_default} alt={urlPokemon.name} />
      <Link to={data.url}>Detalhes</Link>
    </DivCard>
  );
}
