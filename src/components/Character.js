import React from "react";

const Character = ({ character }) => {
  return (
    <div>
      <h1> Simpsons Quotes </h1>
      <div class="frame">
        <p class="quote">{character.quote}</p>
        <p class="name">{character.name}</p>
        <p class="image">{character.image}</p>
      </div>
    </div>
  );
};

export default Character;
