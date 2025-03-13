import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import GameDetailsPage from "./pages/GameDetailsPage"

const App = () => {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:gameId" element={<GameDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App

