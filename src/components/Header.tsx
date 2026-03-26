import { Link } from "react-router-dom"
import logo from "../../estilo/img/logo.png"

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" width="80" />

      <h1>Turma do Bem</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/integrantes">Quem somos</Link>
      </nav>
    </header>
  )
}