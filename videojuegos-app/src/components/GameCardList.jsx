// src/components/GameCardList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const GameCardList = ({ games }) => {
  const getMetacriticClass = (score) => {
    if (!score) return ""
    if (score >= 75) return "high"
    if (score >= 50) return "medium"
    return "low"
  }
  return (
    <div className="game-card-list">
      <h2>Mejores juegos segun Metacritic</h2>
      {games.length === 0 ? (
        <div className="loading">Cargando juegos...</div>
      ) : (
        <ul className="game-grid">
          {games.map((game) => (
            <li key={game.id} className="game-card">
              <Link to={`/game/${game.id}`}>
                <img src={game.background_image || "/placeholder-game.jpg"} alt={game.name} loading="lazy" />
                <div className="game-card-content">
                  <h3>{game.name}</h3>
                  <span className={`metacritic ${getMetacriticClass(game.metacritic)}`}>
                    {game.metacritic || "N/A"}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GameCardList;