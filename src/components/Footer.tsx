export default function Footer() {
  return (
    <footer className="bg-[#a3c23e] text-white py-4 px-6">
      <div className="flex flex-wrap items-center justify-between gap-3 max-w-6xl mx-auto">
        <p className="text-sm text-white/80">&copy; 2025 Turma do Bem — Todos os direitos reservados</p>

        <a
          href="https://www.instagram.com/ongturmadobem"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="flex items-center gap-2 bg-white/20 hover:bg-white/40 transition-all duration-300 px-4 py-1.5 rounded-full text-white text-sm font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="white" stroke="none" />
          </svg>
          @ongturmadobem
        </a>
      </div>
    </footer>
  )
}