import { useState, useEffect } from "react";
import axios from "axios";

import {
  ContainerDetails,
  ContainerCardDetails,
  ImgLogoPokemon,
} from "../styles";

import { BiLeftArrowAlt, BiUndo } from "react-icons/bi";
import pokemonLogo from "../assets/pokemonLogo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Details() {
  const [urlPokemon, setUrlPokemon] = useState(null);
  let urlPage = window.location.pathname;
  const removeFirstCharacterUrl = urlPage.slice(1);

  const [skinPokemon, setSkinPokemon] = useState(true);
  const [faceBackPokemon, setFaceBackPokemon] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(removeFirstCharacterUrl)
      .then((response) => {
        setUrlPokemon(response.data);
      })
      .catch((error) => {
        navigate("/");
      });
  }, []);

  if (urlPokemon === null) {
    return;
  }

  let skinDefault;
  let skinShiny;

  if (skinPokemon && faceBackPokemon) {
    skinDefault = urlPokemon.sprites.front_default;
  } else if (!skinPokemon && faceBackPokemon) {
    skinShiny = urlPokemon.sprites.front_shiny;
  } else if (skinPokemon && !faceBackPokemon) {
    skinDefault = urlPokemon.sprites.back_default;
  } else if (!skinPokemon && !faceBackPokemon) {
    skinShiny = urlPokemon.sprites.back_shiny;
  }

  return (
    <ContainerDetails>
      <article>
        <Link to="/">
          <BiLeftArrowAlt />
        </Link>
      </article>

      <ImgLogoPokemon
        src={pokemonLogo}
        alt="Pokemon Logo"
        className="imgLogoPageDetails"
      />

      <div className="buttons">
        <button onClick={() => setSkinPokemon(true)}>Padrão</button>
        <button onClick={() => setSkinPokemon(false)}>Shiny</button>
      </div>

      <ContainerCardDetails>
        <h1 className="pokemonName">{urlPokemon.name}</h1>

        <img
          src={skinPokemon ? skinDefault : skinShiny}
          alt={urlPokemon.name}
        />

        <button
          className="buttonToSpin"
          onClick={() => setFaceBackPokemon(!faceBackPokemon)}
        >
          <BiUndo />
        </button>

        <div className="infoPokemon">
          <p>
            <span>XP: </span>
            {urlPokemon.base_experience}
          </p>
          <p>
            <span>Altura: </span>
            {urlPokemon.height}
          </p>
          <p>
            <span>Peso: </span>
            {urlPokemon.weight}
          </p>
        </div>
      </ContainerCardDetails>
    </ContainerDetails>
  );
}
