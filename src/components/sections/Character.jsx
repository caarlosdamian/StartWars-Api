import React, { useEffect, useState } from "react";
import "../../styles/character.css";
import CharacterCard from "../CharacterCard";
import SelectCharacter from "../SelectCharacter";
import GetData from "../../helpers/getCharacter";

export default function Character() {
  const [character, setCharacter] = useState([]);
  const [person, setPerson] = useState(1);
  useEffect(() => {
    GetData(person).then((res) => {
      setCharacter(res);
    });
  }, [person]);
  return (
    <div className="character">
      <div className="characterContainer">
        <h1>Character</h1>
        <div className="selectChar">
          <SelectCharacter character={character} person={person} setPerson={setPerson} />
        </div>
        <div className="card">
          <CharacterCard character={character} />
        </div>
      </div>
    </div>
  );
}
