import { Link } from "react-router-dom"
import logo from "../../estilo/img/logo.png"

export default function Header() {
  return (
    <header className="cabecalho">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" />
        <h1>Turma do Bem</h1>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/faq">Faq</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/integrantes">Quem somos</Link>
      </nav>
    </header>
  )
}