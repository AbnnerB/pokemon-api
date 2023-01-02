import { useEffect, useState } from "react";
import axios from "axios";
import CardPokemon from "./components/CardPokemon";

function App() {
  const [listPok, setListPok] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      setListPok(response.data.results);
    });
  }, []);

  return (
    <div className="App">
      {listPok.map((item, index) => (
        <div key={index}>
          <CardPokemon data={item} />
        </div>
      ))}
    </div>
  );
}

export default App;
