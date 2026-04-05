import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../estilo/img/logo.png"

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="bg-[#a3c23e] text-white px-8 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-[75px] h-auto" />
          <h1 className="text-3xl font-semibold ml-4 tracking-wide">Turma do Bem</h1>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuAberto ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuAberto ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuAberto ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        <nav className="hidden md:flex gap-5">
          <Link to="/" className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">Home</Link>
          <Link to="/sobre" className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">Sobre</Link>
          <Link to="/faq" className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">FAQ</Link>
          <Link to="/solucao" className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">Solução</Link>
          <Link to="/contato" className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">Contato</Link>
          <Link to="/integrantes" className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">Quem somos</Link>
        </nav>
      </div>

      {menuAberto && (
        <nav className="md:hidden flex flex-col gap-4 mt-4 pb-2">
          <Link to="/" onClick={() => setMenuAberto(false)} className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">Home</Link>
          <Link to="/sobre" onClick={() => setMenuAberto(false)} className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">Sobre</Link>
          <Link to="/faq" onClick={() => setMenuAberto(false)} className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">FAQ</Link>
          <Link to="/solucao" onClick={() => setMenuAberto(false)} className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">Solução</Link>
          <Link to="/contato" onClick={() => setMenuAberto(false)} className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">Contato</Link>
          <Link to="/integrantes" onClick={() => setMenuAberto(false)} className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">Quem somos</Link>
        </nav>
      )}
    </header>
  )
}