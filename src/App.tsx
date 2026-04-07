import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Faq from "./pages/Faq"
import Contato from "./pages/Contato"
import Integrantes from "./pages/Integrantes"
import IntegranteDetalhe from "./pages/IntegranteDetalhe"
import Solucao from "./pages/Solucao"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#222]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrantes/:id" element={<IntegranteDetalhe />} />
          <Route path="/solucao" element={<Solucao />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App