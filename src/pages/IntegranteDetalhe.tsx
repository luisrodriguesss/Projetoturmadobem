import { useParams, useNavigate } from "react-router-dom"
import { listaIntegrantes } from "./Integrantes"

const detalhes: Record<string, { github: string; linkedin: string; descricao: string }> = {
  luis: {
    github: "https://github.com/luisrodriguesss",
    linkedin: "https://www.linkedin.com/in/luis-seripieri-1bb360395/",
    descricao: "Estudante de Front-End apaixonado por tecnologia.",
  },
  kichimoto: {
    github: "https://github.com/luizkichimoto",
    linkedin: "https://www.linkedin.com/in/luiz-kichimoto-123456789/",
    descricao: "Desenvolvedor focado em criar interfaces modernas e acessíveis.",
  },
  gabriel: {
    github: "https://github.com/GabrielCreates",
    linkedin: "https://www.linkedin.com/in/gabrielrochaads/",
    descricao: "Estudante de design e desenvolvimento web com foco em UX.",
  },
}

export default function IntegranteDetalhe() {
  const { id } = useParams<{ id: string }>()
  const navegar = useNavigate()

  const integrante = listaIntegrantes.find((i) => i.id === id)
  const info = id ? detalhes[id] : null

  if (!integrante || !info) {
    return (
      <main>
        <section>
          <h2>Integrante não encontrado</h2>
          <button onClick={() => navegar("/integrantes")}>Voltar</button>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="integrantes-section">
        <button onClick={() => navegar("/integrantes")}>← Voltar</button>

        <div className="integrante-card">
          <img src={integrante.foto} alt={`Foto de ${integrante.nome}`} />
          <h2>{integrante.nome}</h2>
          <p>{integrante.rm}</p>
          <p>{info.descricao}</p>
        </div>

        <div>
          <p className="github">
            GitHub:{" "}
            <a href={info.github} target="_blank" rel="noreferrer">
              {info.github.replace("https://github.com/", "")}
            </a>
          </p>
          <p className="linkedin">
            LinkedIn:{" "}
            <a href={info.linkedin} target="_blank" rel="noreferrer">
              Ver perfil
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
