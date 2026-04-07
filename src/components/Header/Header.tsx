import { useState } from "react"
import { Logo } from "./LogoTDB"
import { NavLinks } from "./NavLinks"
import { MobileMenu } from "./MobileMenu"

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="bg-[#a3c23e] text-white px-5 py-4 shadow-md md:px-8">
      
      <div className="flex justify-between items-center">
        <Logo />

        {/* Desktop */}
        <nav className="hidden md:flex gap-4 lg:gap-5">
          <NavLinks />
        </nav>

        {/* Botão mobile */}
        <MobileMenu aberto={menuAberto} setAberto={setMenuAberto} />
      </div>

      {/* Mobile */}
      {menuAberto && (
        <nav className="md:hidden flex flex-col gap-4 mt-4 pb-2 text-center">
          <NavLinks mobile onClick={() => setMenuAberto(false)} />
        </nav>
      )}
    </header>
  )
}