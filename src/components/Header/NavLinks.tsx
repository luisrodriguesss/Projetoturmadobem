import { Link } from "react-router-dom"

interface Props {
  mobile?: boolean
  onClick?: () => void
}

export function NavLinks({ mobile = false, onClick }: Props) {
  const baseClass = mobile
    ? "text-white font-medium hover:text-[#f97316] transition-colors duration-300"
    : "text-white text-sm font-medium hover:text-[#f97316] transition-colors duration-300 lg:text-base"

  return (
    <>
      <Link to="/" onClick={onClick} className={baseClass}>Home</Link>
      <Link to="/sobre" onClick={onClick} className={baseClass}>Sobre</Link>
      <Link to="/faq" onClick={onClick} className={baseClass}>FAQ</Link>
      <Link to="/solucao" onClick={onClick} className={baseClass}>Solução</Link>
      <Link to="/contato" onClick={onClick} className={baseClass}>Contato</Link>
      <Link to="/integrantes" onClick={onClick} className={baseClass}>Quem somos</Link>
    </>
  )
}