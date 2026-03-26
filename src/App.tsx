import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/home"
import Sobre from "./pages/Sobre"
import Faq from "./pages/Faq"
import Contato from "./pages/Contato"
import Integrantes from "./pages/Integrantes"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<Integrantes />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App