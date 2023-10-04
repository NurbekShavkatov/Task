import React, { useState } from "react";

function Like() {
  const [machines, setMachines] = useState([
    { id: 1, name: "Mashina 1", liked: false },
    { id: 2, name: "Mashina 2", liked: false },
    { id: 3, name: "Mashina 3", liked: false },
  ]);

  const [favorites, setFavorites] = useState([]);

  const handleLike = (id) => {
    
    const updatedMachines = machines.map((machine) => {
      if (machine.id === id) {
        return { ...machine, liked: !machine.liked };
      }
      return machine;
    });

    setMachines(updatedMachines);

    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    } else {
      const updatedFavorites = favorites.filter((favoriteId) => favoriteId !== id);
      setFavorites(updatedFavorites);
    }
  };

  return (
    <div>
      <h1>Mashinalar ro'yxati</h1>
      <ul>
        {machines.map((machine) => (
          <li key={machine.id}>
            {machine.name}{" "}
            <button onClick={() => handleLike(machine.id)}>
              {machine.liked ? "Sevimli" : "Like"}
            </button>
          </li>
        ))}
      </ul>
      <h2>Sevimlilar ro'yxati</h2>
      <ul>
        {favorites.map((favoriteId) => {
          const machine = machines.find((m) => m.id === favoriteId);
          return <li key={favoriteId}>{machine.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Like;
