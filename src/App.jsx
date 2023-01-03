import Home from "./Pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Pages/Details";
import PageError from "./Pages/PageError";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="https://pokeapi.co/api/v2/pokemon/:id"
            element={<Details />}
          />
          <Route path="*" element={<PageError />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
