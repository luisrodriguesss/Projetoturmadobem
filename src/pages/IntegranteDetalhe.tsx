import { useParams, useNavigate } from "react-router-dom"
import { listaIntegrantes } from "../pages/listaIntegrantes"

const detalhes: Record<string, { github: string; linkedin: string; descricao: string }> = {
  luis: {
    github: "https://github.com/luisrodriguesss",
    linkedin: "https://www.linkedin.com/in/luis-seripieri-1bb360395/",
    descricao: "Estudante de Front-End apaixonado por tecnologia e impacto social.",
  },
  kichimoto: {
    github: "https://github.com/luizkichimoto",
    linkedin: "https://www.linkedin.com/feed/",
    descricao: "Desenvolvedor focado em criar interfaces modernas e acessíveis.",
  },
  gabriel: {
    github: "https://github.com/GabrielCreates",
    linkedin: "https://www.linkedin.com/feed/",
    descricao: "Entusiasta de design e desenvolvimento web com foco em UX.",
  },
}

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

export default function IntegranteDetalhe() {
  const { id } = useParams<{ id: string }>()
  const navegar = useNavigate()

  const integrante = listaIntegrantes.find((i: { id: string }) => i.id === id)
  const info = id ? detalhes[id] : null

  if (!integrante || !info) {
    return (
      <main className="px-4 py-6 md:px-[5%] md:py-8">
        <section className="bg-white rounded-2xl shadow-sm p-5 text-center md:p-8">
          <h2 className="text-[#f97316] text-xl font-semibold mb-4 md:text-2xl">Integrante não encontrado</h2>
          <button
            onClick={() => navegar("/integrantes")}
            className="mt-4 px-5 py-2 bg-[#a3c23e] text-white rounded-lg font-semibold hover:bg-[#f97316] transition-colors duration-300"
          >
            Voltar
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="px-4 py-6 md:px-[5%] md:py-8 xl:px-[12%] xl:py-12">
      <section className="bg-white rounded-2xl shadow-sm p-5 w-full text-center md:p-8 md:max-w-[500px] md:mx-auto">
        <button
          onClick={() => navegar("/integrantes")}
          className="mb-6 px-4 py-2 bg-[#a3c23e] text-white rounded-lg font-semibold hover:bg-[#f97316] transition-colors duration-300"
        >
          ← Voltar
        </button>

        <div className="bg-white rounded-2xl shadow-md p-5 mt-4 md:p-6">
          <img
            src={integrante.foto}
            alt={`Foto de ${integrante.nome}`}
            className="w-[160px] h-[160px] rounded-lg object-cover mb-4 mx-auto md:w-[200px] md:h-[200px] xl:w-[220px] xl:h-[220px]"
          />
          <h2 className="text-xl font-semibold text-[#333] md:text-2xl">{integrante.nome}</h2>
          <p className="text-sm text-gray-500 mt-1">{integrante.rm}</p>
          <p className="text-sm text-gray-500">{integrante.turma}</p>
          <p className="mt-4 text-sm text-[#222] md:text-base">{info.descricao}</p>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href={info.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 bg-[#f8f9fa] hover:bg-[#f97316] hover:text-white text-[#f97316] transition-all duration-300 px-4 py-2 rounded-full text-sm font-medium"
          >
            <IconeGithub />
            GitHub
          </a>

          <a
            href={info.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 bg-[#f8f9fa] hover:bg-[#0A66C2] hover:text-white text-[#0A66C2] transition-all duration-300 px-4 py-2 rounded-full text-sm font-medium"
          >
            <IconeLinkedin />
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  )
}