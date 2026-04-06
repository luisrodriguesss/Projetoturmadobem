import { useNavigate } from "react-router-dom"
import { listaIntegrantes } from "../pages/listaIntegrantes"

export default function Integrantes() {
  const navegar = useNavigate()

  return (
    <main className="px-4 py-6 md:px-[5%] md:py-8 xl:px-[12%] xl:py-12">
      <section className="mb-8 bg-white rounded-2xl shadow-sm p-5 md:p-8">
        <h2 className="text-[#f97316] text-xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2 md:text-2xl">
          Quem Somos
        </h2>
        <p className="mt-2 text-sm md:text-base">
          Somos um grupo de estudantes apaixonados por tecnologia, design e impacto social.
          Nosso propósito é desenvolver projetos que transformem ideias em ferramentas reais de mudança,
          inspirando o mesmo espírito solidário da Turma do Bem.
        </p>
      </section>

      <section className="mb-8 bg-white rounded-2xl shadow-sm p-5 md:p-8 text-center">
        <h2 className="text-[#f97316] text-xl font-semibold mb-8 border-l-[6px] border-[#a3c23e] pl-2 text-left md:text-2xl">
          Nosso Time
        </h2>

        <div className="flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-10">
          {listaIntegrantes.map((integrante) => (
            <div
              key={integrante.id}
              onClick={() => navegar(`/integrantes/${integrante.id}`)}
              className="bg-white rounded-2xl shadow-md w-full max-w-[280px] p-5 text-center cursor-pointer hover:-translate-y-2 transition-transform duration-300 md:w-[45%] xl:w-[260px]"
            >
              <img
                src={integrante.foto}
                alt={`Foto de ${integrante.nome}`}
                className="w-[180px] h-[180px] rounded-lg object-cover mb-3 mx-auto md:w-[200px] md:h-[200px] xl:w-[220px] xl:h-[220px]"
              />
              <h3 className="text-lg text-[#333] mt-1 md:text-xl">{integrante.nome}</h3>
              <p className="text-sm text-gray-500 mt-1">{integrante.rm}</p>
              <p className="text-sm text-gray-500">{integrante.turma}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 bg-white rounded-2xl shadow-sm p-5 md:p-8">
        <h2 className="text-[#f97316] text-xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2 md:text-2xl">
          Nossa Missão
        </h2>
        <p className="mt-2 text-sm md:text-base">
          Unir propósito e tecnologia para criar soluções que gerem impacto positivo,
          transformando a vida das pessoas e inspirando novas conexões humanas.
        </p>
      </section>

      <section className="mb-6 bg-white rounded-2xl shadow-sm p-5 md:p-8">
        <h3 className="text-lg font-semibold mb-3 md:text-xl">Github</h3>
        <nav className="flex flex-wrap gap-2 text-sm md:text-base">
          <a href="https://github.com/luisrodriguesss" target="_blank" rel="noreferrer" className="text-[#f97316] hover:underline">luisrodriguesss</a>
          <span>|</span>
          <a href="https://github.com/luizkichimoto" target="_blank" rel="noreferrer" className="text-[#f97316] hover:underline">luizkichimoto</a>
          <span>|</span>
          <a href="https://github.com/GabrielCreates" target="_blank" rel="noreferrer" className="text-[#f97316] hover:underline">gabrielcreates</a>
        </nav>
      </section>

      <section className="mb-8 bg-white rounded-2xl shadow-sm p-5 md:p-8">
        <h3 className="text-lg font-semibold mb-3 md:text-xl">Linkedin</h3>
        <nav className="flex flex-wrap gap-2 text-sm md:text-base">
          <a href="https://www.linkedin.com/in/luis-seripieri-1bb360395/" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:underline">Luis Rodrigues</a>
          <span>|</span>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:underline">Luiz Kichimoto</a>
          <span>|</span>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:underline">Gabriel Rocha</a>
        </nav>
      </section>
    </main>
  )
}