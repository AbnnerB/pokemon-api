import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App";
import GlobalStyle from "./GlobalStyle";

import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
