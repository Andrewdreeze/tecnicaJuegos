"use client"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchGameInfo } from "../services/rawgApiService"
import GameDetailsView from "../components/GameDetailsView"

const GameDetailsPage = () => {
  const { gameId } = useParams()
  const [game, setGame] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadGame = async () => {
      setIsLoading(true)
      const data = await fetchGameInfo(gameId)
      setGame(data)
      setIsLoading(false)
    }
    loadGame()
  }, [gameId])

  return (
    <div className="container">
      <header className="app-header">
        <h1 className="app-title">Desafio VideoJuegos</h1>
      </header>

      {isLoading ? <div className="loading">Cargando detalles del juego...</div> : <GameDetailsView game={game} />}
    </div>
  )
}

export default GameDetailsPage



