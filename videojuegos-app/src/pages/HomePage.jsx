"use client"
import { useState, useEffect } from "react"
import { fetchVideoGames } from "../services/rawgApiService"
import GameCardList from "../components/GameCardList"
import GameFinder from "../components/GameFinder"
import GameFilters from "../components/GameFilters"

const HomePage = () => {
  const [games, setGames] = useState([])
  const [filters, setFilters] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadGames = async () => {
      setIsLoading(true)
      const data = await fetchVideoGames(filters)
      setGames(data?.results || [])
      setIsLoading(false)
    }
    loadGames()
  }, [filters])

  const handleSearch = (query) => {
    setFilters({ ...filters, search: query })
  }

  const handleFilterApply = (newFilters) => {
    setFilters({ ...filters, ...newFilters })
  }

  return (
    <div className="container">
      <header className="app-header">
        <h1 className="app-title">Desafio VideoJuego</h1>
      </header>

      <GameFinder onSearch={handleSearch} />
      <GameFilters applyFilters={handleFilterApply} />

      {isLoading ? <div className="loading">Cargando...</div> : <GameCardList games={games} />}
    </div>
  )
}

export default HomePage

