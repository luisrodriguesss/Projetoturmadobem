interface FooterProps {
  ano?: number
}

export default function Footer({ ano = 2025 }: FooterProps) {
  return (
    <footer className="bg-[#a3c23e] text-[#222] text-center py-4 font-medium shadow-inner">
      <p>&copy; {ano} Turma do Bem — Todos os direitos reservados</p>
    </footer>
  )
}