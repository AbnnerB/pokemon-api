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
  const [listDetailsPokemon, setListDetailsPokemon] = useState(null);
  const urlPage = window.location.pathname;

  const [skinPokemon, setSkinPokemon] = useState(true);
  const [faceBackPokemon, setFaceBackPokemon] = useState(true);

  const pokemonId = urlPage.split("/").pop();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        );

        setListDetailsPokemon(response.data);
      } catch (error) {
        navigate("/");
        console.log(error);
      }
    };
    fetchPokemonDetails();
  }, []);

  if (listDetailsPokemon === null) {
    return;
  }

  let skinDefault;
  let skinShiny;

  if (skinPokemon && faceBackPokemon) {
    skinDefault = listDetailsPokemon.sprites.front_default;
  } else if (!skinPokemon && faceBackPokemon) {
    skinShiny = listDetailsPokemon.sprites.front_shiny;
  } else if (skinPokemon && !faceBackPokemon) {
    skinDefault = listDetailsPokemon.sprites.back_default;
  } else if (!skinPokemon && !faceBackPokemon) {
    skinShiny = listDetailsPokemon.sprites.back_shiny;
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
        <h1 className="pokemonName">{listDetailsPokemon.name}</h1>

        <img
          src={skinPokemon ? skinDefault : skinShiny}
          alt={listDetailsPokemon.name}
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
            {listDetailsPokemon.base_experience}
          </p>
          <p>
            <span>Altura: </span>
            {listDetailsPokemon.height}
          </p>
          <p>
            <span>Peso: </span>
            {listDetailsPokemon.weight}
          </p>
        </div>
      </ContainerCardDetails>
    </ContainerDetails>
  );
}
