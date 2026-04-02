import { Link } from "react-router-dom"
import logo from "../../estilo/img/logo.png"

export default function Header() {
  return (
    <header className="bg-[#a3c23e] text-white flex justify-between items-center px-8 py-4 flex-wrap shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-[75px] h-auto" />
        <h1 className="text-3xl font-semibold ml-4 tracking-wide">Turma do Bem</h1>
      </div>

      <nav className="flex gap-5 flex-wrap">
        <Link to="/" className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">Home</Link>
        <Link to="/sobre" className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">Sobre</Link>
        <Link to="/faq" className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">FAQ</Link>
        <Link to="/solucao" className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">Solução</Link>
        <Link to="/contato" className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">Contato</Link>
        <Link to="/integrantes" className="text-white font-medium hover:text-[#f97316] transition-colors duration-300">Quem somos</Link>
      </nav>
    </header>
  )
}