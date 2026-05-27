import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Contacto from './pages/contactoTemp'

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  )
}

export default App 