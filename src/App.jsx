import { Navigate, Route, Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import MyTown from './pages/MyTown'

export default function App() {
  return (
    <main className="app-shell">
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/town" element={<MyTown />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  )
}
