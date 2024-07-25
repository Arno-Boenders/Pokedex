import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function Navigation() {
  return (
    <nav className="bg-yellow-500 p-4 shadow-lg">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to={ROUTES.home.path}
            className="text-white hover:text-red-500 font-bold transition duration-200"
            activeClassName="text-red-700"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTES.pokemon.path}
            className="text-white hover:text-red-500 font-bold transition duration-200"
            activeClassName="text-red-700"
          >
            Pokemon
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTES.items.path}
            className="text-white hover:text-red-500 font-bold transition duration-200"
            activeClassName="text-red-700"
          >
            Items
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTES.moves.path}
            className="text-white hover:text-red-500 font-bold transition duration-200"
            activeClassName="text-red-700"
          >
            Moves
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTES.berries.path}
            className="text-white hover:text-red-500 font-bold transition duration-200"
            activeClassName="text-red-700"
          >
            Berries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
