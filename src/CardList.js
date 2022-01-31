import React from "react";
import Card from './Card';

const CardList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map(pokemon => {
        return (
          <Card 
            key={pokemon.id} 
            name={pokemon.name}
            id={pokemon.id}
            types={pokemon.types}
          />
        )
      })}
    </div>
  )
};

export default CardList;
