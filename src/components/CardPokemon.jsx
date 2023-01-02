import React, { useEffect, useState } from "react";
import axios from "axios";

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
  console.log(urlPokemon);

  return (
    <div>
      <h4>{urlPokemon.name}</h4>

      <img src={urlPokemon.sprites.front_default} alt={urlPokemon.name} />
    </div>
  );
}
