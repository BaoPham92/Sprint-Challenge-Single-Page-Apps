import React from "react";

export default function CharacterCard({ character }) {
  return (
    <div>
      <img src={character.image} alt="" />
      <ul>
        <li>
          {character.location.name}
        </li>
        <li>
          {character.name}
        </li>
        <li>
          {character.origin.name}
        </li>
        <li>
          {character.species}
        </li>
        <li>
          {character.created}
        </li>
      </ul>
    </div>
  )
}
