import { createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Details from "./Pages/Details";
import PageError from "./Pages/PageError";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/details/:id", element: <Details /> },
  { path: "*", element: <PageError /> },
]);

export { router };
