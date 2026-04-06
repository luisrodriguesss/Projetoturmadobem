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

export default function IntegranteDetalhe() {
  const { id } = useParams<{ id: string }>()
  const navegar = useNavigate()

  const integrante = listaIntegrantes.find((i: { id: string }) => i.id === id)
  const info = id ? detalhes[id] : null

  if (!integrante || !info) {
    return (
      <main className="px-[5%] py-8">
        <section className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <h2 className="text-[#f97316] text-2xl font-semibold mb-4">Integrante não encontrado</h2>
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
    <main className="px-[5%] py-8">
      <section className="bg-white rounded-2xl shadow-sm p-8 max-w-[500px] mx-auto text-center">
        <button
          onClick={() => navegar("/integrantes")}
          className="mb-6 px-4 py-2 bg-[#a3c23e] text-white rounded-lg font-semibold hover:bg-[#f97316] transition-colors duration-300 self-start"
        >
          ← Voltar
        </button>

        <div className="bg-white rounded-2xl shadow-md p-6 mt-4">
          <img
            src={integrante.foto}
            alt={`Foto de ${integrante.nome}`}
            className="w-[220px] h-[220px] rounded-lg object-cover mb-4 mx-auto"
          />
          <h2 className="text-2xl font-semibold text-[#333]">{integrante.nome}</h2>
          <p className="text-sm text-gray-500 mt-1">{integrante.rm}</p>
          <p className="text-sm text-gray-500">{integrante.turma}</p>
          <p className="mt-4 text-[#222]">{info.descricao}</p>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <p>
            <span className="font-semibold">GitHub: </span>
            <a href={info.github} target="_blank" rel="noreferrer" className="text-[#f97316] hover:underline">
              {info.github.replace("https://github.com/", "")}
            </a>
          </p>
          <p>
            <span className="font-semibold">LinkedIn: </span>
            <a href={info.linkedin} target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:underline">
              Ver perfil
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}