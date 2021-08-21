import React from "react";
import "../styles/characterCard.css";
import Films from "./Films";
export default function CharacterCard({ character }) {
  return (
    <div className="characterCard">
      <div className="card" style={{ width: "20rem", height: "20rem" }}>
        <div className="card-body">
          <h5 className="card-title">{character?.name}</h5>
          <span>Movies:</span>
          <hr></hr>
          <ul>
            <Films films={character?.films} />
          </ul>
        </div>
      </div>
    </div>
  );
}
