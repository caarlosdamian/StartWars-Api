import React, { useEffect, useState } from "react";
import GetData from "../helpers/getData";
export default function SelectCharacter({ setPerson, person }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    GetData().then((res) => {
      setCharacters(res.results);
    });
  }, []);

  const handleSelect = (e) => {
    setPerson(e.target.value);
  };
  return (
    <div>
      <select
        onChange={handleSelect}
        className="form-select"
        aria-label="Default select example"
      >
        <option defaultValue>Select Option</option>
        {characters.map((item, i) => (
          <option value={i + 1} key={i}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
