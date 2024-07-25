import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Root from "./layouts/Root";
import { ROUTES } from "./routes/routes";
import { Berries, DetailPokemon, Home, Items, Moves, Pokemon } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path={ROUTES.home.path} element={<Home />} />
      <Route path={ROUTES.pokemon.path} element={<Pokemon />} />
      <Route path={ROUTES.detailPokemon.path} element={<DetailPokemon />} />
      <Route path={ROUTES.items.path} element={<Items />} />
      <Route path={ROUTES.moves.path} element={<Moves />} />
      <Route path={ROUTES.berries.path} element={<Berries />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
