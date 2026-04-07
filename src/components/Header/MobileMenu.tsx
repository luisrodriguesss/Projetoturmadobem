interface Props {
  aberto: boolean
  setAberto: (value: boolean) => void
}

export function MobileMenu({ aberto, setAberto }: Props) {
  return (
    <button
      className="md:hidden flex flex-col gap-1.5 cursor-pointer"
      onClick={() => setAberto(!aberto)}
      aria-label="Menu"
    >
      <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${aberto ? "rotate-45 translate-y-2" : ""}`} />
      <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${aberto ? "opacity-0" : ""}`} />
      <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${aberto ? "-rotate-45 -translate-y-2" : ""}`} />
    </button>
  )
}