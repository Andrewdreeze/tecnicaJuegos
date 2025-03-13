"use client"

import { useState } from "react"

const GameFinder = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <form onSubmit={handleFormSubmit} className="game-finder">
      <input
        type="text"
        placeholder="Busca un Videojuego..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Buscar videojuegos"
      />
      <button type="submit">Buscar</button>
    </form>
  )
}

export default GameFinder

