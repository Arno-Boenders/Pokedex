import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function Navigation() {
  return (
    <nav>
      <NavLink to={ROUTES.home.path}>Home</NavLink>
      <NavLink to={ROUTES.pokemon.path}>Pokemon</NavLink>
      <NavLink to={ROUTES.items.path}>Items</NavLink>
      <NavLink to={ROUTES.moves.path}>Moves</NavLink>
      <NavLink to={ROUTES.berries.path}>Berries</NavLink>
    </nav>
  );
}
