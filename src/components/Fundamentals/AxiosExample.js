import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function AxiosExample() {
  const [characters, setCharacters] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [info, setInfo] = useState(null);

  async function getCharacters() {
    return await axios.get(
      `https://rickandmortyapi.com/api/character/?page=1`
    )
    .then((characters) => setCharacters(characters.data.results))
  }

  async function getCharacter(id) {
    if(id) {
      return await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      )
      .then((character) => setInfo(character.data))
    }
  };

  useEffect(() => {
    getCharacters()
  }, []);

  useEffect(() => {
    getCharacter(openId)
  }, [openId]);

  return (
    <main className="App">
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            {character.name}
            {openId === character.id && info ? (
              <div>
                <div>Status: {info.status}</div>
                <div>Species: {info.species}</div>
              </div>
            ) : null}
            <button onClick={() => setOpenId(character.id)}>More Info</button>
          </li>
        ))}
      </ul>
    </main>
  );
}