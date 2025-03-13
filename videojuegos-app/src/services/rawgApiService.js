import axios from "axios"

const RAWG_ACCESS_TOKEN = "81fbc71f7db34c808434bd0723afef94"
const RAWG_ENDPOINT = "https://api.rawg.io/api"

export const fetchVideoGames = async (queryParams = {}) => {
  try {
    // Preparar los parámetros de consulta
    const params = {
      key: RAWG_ACCESS_TOKEN,
      page_size: 20,
    }

    // Añadir parámetros de búsqueda si existen
    if (queryParams.search) {
      params.search = queryParams.search
    }

    // Añadir filtro de año si existe
    if (queryParams.year) {
      const year = Number.parseInt(queryParams.year)
      params.dates = `${year}-01-01,${year}-12-31`
    }

    // Añadir filtro de género si existe
    if (queryParams.genres) {
      params.genres = queryParams.genres
    }

    // Añadir filtro de plataforma si existe
    if (queryParams.platforms) {
      params.platforms = queryParams.platforms
    }

    // Ordenar por popularidad por defecto
    params.ordering = queryParams.ordering || "-added"

    const response = await axios.get(`${RAWG_ENDPOINT}/games`, { params })
    return response.data
  } catch (error) {
    console.error("Error al obtener videojuegos:", error)
    return { results: [] }
  }
}

export const fetchGameInfo = async (gameId) => {
  try {
    const response = await axios.get(`${RAWG_ENDPOINT}/games/${gameId}`, {
      params: { key: RAWG_ACCESS_TOKEN },
    })
    return response.data
  } catch (error) {
    console.error("Error al obtener detalles del videojuego:", error)
    return null
  }
}

