import React, { useEffect, useState } from "react";

// * COMPONENTS
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

// * STYLES
import style from './StyledComponents/StyledComponents';

// * API CALL
import API from '../API';

export default function CharacterList() {
  // * CHARACTER DATA FROM API
  const [characters, setCharacters] = useState([]);

  // * SEARCH DATA
  const [search, setSearch] = useState({ search: "" });


  // * handleChange for input's onChange attr
  const handleChange = (e) => {

    // Prevent default behavior
    e.preventDefault();

    // Set new object value
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })

    // Log new value state
    console.log(search)
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    API.main().then(res => setCharacters(res.data.results))
  }, []);

  return (
    <section className="character-list">
      {console.log(characters)}

      <SearchForm handleChange={handleChange} search={search.search} />

      {
        search.search ?
          characters.filter((character, key) =>
            character.name.toLowerCase().includes(search.search.toLowerCase())
            &&
            <style.Cards key={key}>
              <h2>Status:{character.status}</h2>
              <CharacterCard character={character} />
            </style.Cards>
          ) :
          characters.map((character, key) =>
            <style.Cards key={key}>
              <h2>Status:{character.status}</h2>
              <CharacterCard character={character} />
            </style.Cards>
          )
      }
    </section>
  );
}
