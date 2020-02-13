import React from "react";

function Character({ simpson }) {
  return (
    <div>
      <p>{simpson.quote}</p>
      <p>{simpson.character}</p>
      <p>
        <img src={simpson.image} alt="simpsons" />{" "}
      </p>
    </div>
  );
}

export default Character;
