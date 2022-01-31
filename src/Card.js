import React from "react";

const Card = ({ name, id, types }) => {
  const capitalize = name.substring(0,1);
  name = capitalize.toUpperCase() + name.substring(1);

  return (
    <div className="dib mw5 bg-white br3 ba b--black-10 ma3 pa3 tc grow">
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} 
        alt={name} 
      />
      <h2>{name}</h2>
      {types.map(index => {
        const capitalize = index.type.name.substring(0,1)
        index.type.name = capitalize.toUpperCase() + index.type.name.substring(1)

        return (
          <p key={id+index.type.name} className={`f6 link br2 ph3 pv2 mb2 dib white bg-${index.type.name.toLowerCase()} ma1`}>
            {index.type.name}
          </p>
        )
      })}
    </div>
  )
};

export default Card;
