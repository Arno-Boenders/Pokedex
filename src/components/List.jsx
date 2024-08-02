import React, { useEffect, useState } from "react";
import Card from "./Card";

const getAllPokemon = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch the list of Pokémon");
  }
  const data = await res.json();
  return data.results;
};

const getPokemon = async (name, retries = 3) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!res.ok) {
      throw new Error("Failed to fetch Pokémon details");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying to fetch ${name}, attempts left: ${retries}`);
      return getPokemon(name, retries - 1);
    } else {
      console.error(`Failed to fetch ${name} after multiple attempts`);
      return null; // Return null if fetching fails after retries
    }
  }
};

export default function List() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const allPokemon = await getAllPokemon();
        const batchSize = 50; // Number of Pokémon to fetch at a time
        let pokemonDetails = [];

        for (let i = 0; i < allPokemon.length; i += batchSize) {
          const batch = allPokemon.slice(i, i + batchSize);
          const batchDetails = await Promise.all(
            batch.map((pokemon) => getPokemon(pokemon.name))
          );

          // Filter out any null values from failed fetches
          const validBatchDetails = batchDetails.filter(
            (pokemon) => pokemon !== null
          );
          pokemonDetails = [...pokemonDetails, ...validBatchDetails];
          setPokemonData((prevData) => [...prevData, ...validBatchDetails]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Pokemon List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonData.map((pokemon) => (
          <li key={pokemon.id}>
            <Card pokemon={pokemon} />
          </li>
        ))}
      </ul>
    </div>
  );
}
