import { useState, useEffect } from "react";
import axios from "axios";

export default function Details() {
  const [urlPokemon, setUrlPokemon] = useState(null);
  let urlPage = window.location.pathname;
  const removeFirstCharacterUrl = urlPage.slice(1);

  //   console.log(removeFirstCharacterUrl);

  useEffect(() => {
    axios.get(removeFirstCharacterUrl).then((response) => {
      setUrlPokemon(response.data);
    });
  }, []);

  if (urlPokemon === null) {
    return;
  }
  console.log(urlPokemon);

  return (
    <div>
      <h1 className="pokemonName">{urlPokemon.name}</h1>

      <img src={urlPokemon.sprites.front_default} alt={urlPokemon.name} />
      <img src={urlPokemon.sprites.front_shiny} alt={urlPokemon.name} />
      {/* <img src={urlPokemon.sprites.back_default} alt={urlPokemon.name} /> */}
      {/* <img src={urlPokemon.sprites.back_shiny} alt={urlPokemon.name} /> */}
      <div>
        <span>XP: {urlPokemon.base_experience}</span>
        <br />
        <span>altura: {urlPokemon.height}</span>
        <br />
        <span>Peso: {urlPokemon.weight}</span>
      </div>
    </div>
  );
}
