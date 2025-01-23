import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom"
import { Home } from "./pages"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Navigate to='/' replace />} path='*' />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
