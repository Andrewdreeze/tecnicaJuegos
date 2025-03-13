"use client"

import { useState } from "react"

const GameFilters = ({ applyFilters }) => {
  const [yearFilter, setYearFilter] = useState("")
  const [genreFilter, setGenreFilter] = useState("")
  const [platformFilter, setPlatformFilter] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)

  const popularGenres = [
    { id: 4, name: "Acción" },
    { id: 3, name: "Aventura" },
    { id: 5, name: "RPG" },
    { id: 2, name: "Shooter" },
    { id: 10, name: "Estrategia" },
    { id: 14, name: "Simulación" },
    { id: 1, name: "Carreras" },
    { id: 15, name: "Deportes" },
  ]

  const popularPlatforms = [
    { id: 4, name: "PC" },
    { id: 187, name: "PlayStation 5" },
    { id: 18, name: "PlayStation 4" },
    { id: 1, name: "Xbox One" },
    { id: 186, name: "Xbox Series S/X" },
    { id: 7, name: "Nintendo Switch" },
  ]

  const handleFilterApply = () => {
    applyFilters({
      year: yearFilter,
      genres: genreFilter,
      platforms: platformFilter,
    })
  }
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 2009 }, (_, i) => currentYear - i)

  return (
    <div className="game-filters">
      <div
        className="filter-header"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h3>Filtros de busqueda</h3>
        <span style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s ease" }}>
          ▼
        </span>
      </div>

      {isExpanded && (
        <div className="filter-content" style={{ width: "100%", marginTop: "15px" }}>
          <label>
            Año de Lanzamiento:
            <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
              <option value="">Todos los años</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>

          <label>
            Género:
            <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
              <option value="">Todos los géneros</option>
              {popularGenres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Plataforma:
            <select value={platformFilter} onChange={(e) => setPlatformFilter(e.target.value)}>
              <option value="">Todas las plataformas</option>
              {popularPlatforms.map((platform) => (
                <option key={platform.id} value={platform.id}>
                  {platform.name}
                </option>
              ))}
            </select>
          </label>

          <button onClick={handleFilterApply}>Aplicar Filtros</button>
        </div>
      )}
    </div>
  )
}

export default GameFilters


