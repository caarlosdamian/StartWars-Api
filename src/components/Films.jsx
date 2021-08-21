import React, { useEffect, useState } from "react";
export default function Films({ films }) {
  const [film, setfilm] = useState([]);

  useEffect(() => {
    if (films === undefined) {
    } else {
      Promise.all(films?.map((u) => fetch(u)))
        .then((responses) => Promise.all(responses?.map((res) => res.json())))
        .then((data) => {
          setfilm(data);
        });
    }
  }, [films]);
  return (
    <div>
      {film?.map((item) => (
        <li key={item.episode_id}>{item.title}</li>
      ))}
    </div>
  );
}
