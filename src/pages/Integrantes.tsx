import { useNavigate } from "react-router-dom"
import { listaIntegrantes } from "../pages/listaIntegrantes"

function IconeGithub() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function IconeLinkedin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

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
        <h3 className="text-lg font-semibold mb-4 md:text-xl">Redes Sociais</h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm md:text-base">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">GitHub</p>
            <a href="https://github.com/luisrodriguesss" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#f97316] hover:underline">
              <IconeGithub /> luisrodriguesss
            </a>
            <a href="https://github.com/luizkichimoto" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#f97316] hover:underline">
              <IconeGithub /> luizkichimoto
            </a>
            <a href="https://github.com/GabrielCreates" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#f97316] hover:underline">
              <IconeGithub /> gabrielcreates
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">LinkedIn</p>
            <a href="https://www.linkedin.com/in/luis-seripieri-1bb360395/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#0A66C2] hover:underline">
              <IconeLinkedin /> Luis Rodrigues
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#0A66C2] hover:underline">
              <IconeLinkedin /> Luiz Kichimoto
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#0A66C2] hover:underline">
              <IconeLinkedin /> Gabriel Rocha
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}