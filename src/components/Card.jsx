// Card.js
import React from "react";

export default function Card({ pokemon }) {
  return (
    <div className="max-w-sm rounded shadow-lg p-4 m-4 flex flex-col items-center">
      <h2 className="font-semibold text-lg">{pokemon.name}</h2>
      <p className="text-sm text-gray-600">#{pokemon.id}</p>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p className="text-sm text-gray-600"> {pokemon.types.map((type) => type.type.name).join(", ")}</p>
      {/* Add other Pokémon details here */}
    </div>
  );
}
