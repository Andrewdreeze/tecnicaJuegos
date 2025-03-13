import { Link } from "react-router-dom"
const GameDetailsView = ({ game }) => {
  if (!game) return <div className="loading">Cargando detalles del jVideoJuego...</div>

  // Función para formatear la fecha
  const formatDate = (dateString) => {
    if (!dateString) return "Desconocido"
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="game-details-view">
      <Link to="/" className="back-button">
        ← Volver a la lista
      </Link>

      <div className="game-details-header">
        <h2 className="game-details-title">{game.name}</h2>
        <img src={game.background_image || "/placeholder-game.jpg"} alt={game.name} className="game-details-image" />
      </div>

      <div className="game-details-info">
        <div className="info-item">
          <h3>Géneros</h3>
          <p>{game.genres?.map((genre) => genre.name).join(", ") || "No disponible"}</p>
        </div>

        <div className="info-item">
          <h3>Puntuación</h3>
          <p className={`metacritic ${game.metacritic >= 75 ? "high" : game.metacritic >= 50 ? "medium" : "low"}`}>
            {game.metacritic || "No disponible"}
          </p>
        </div>

        <div className="info-item">
          <h3>Plataformas</h3>
          <p>{game.platforms?.map((p) => p.platform.name).join(", ") || "No disponible"}</p>
        </div>

        <div className="info-item">
          <h3>Lanzamiento</h3>
          <p>{formatDate(game.released)}</p>
        </div>
      </div>

      {game.description_raw && (
        <div className="info-item">
          <h3>Descripción</h3>
          <p>{game.description_raw}</p>
        </div>
      )}

      {game.clip && (
        <video controls className="game-details-video">
          <source src={game.clip.clip} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      )}
    </div>
  )
}

export default GameDetailsView

