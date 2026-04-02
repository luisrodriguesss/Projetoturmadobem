import { useNavigate } from "react-router-dom"
import luis from "../../estilo/img/fotoluis.png"
import kichimoto from "../../estilo/img/fotokichimoto.png"
import gabriel from "../../estilo/img/fotogabriel.png"

type Integrante = {
  id: string
  nome: string
  rm: string
  foto: string
}

export const listaIntegrantes: Integrante[] = [
  { id: "luis", nome: "Luis Fillipe Seripieri", rm: "RM567918", foto: luis },
  { id: "kichimoto", nome: "Luiz Felipe Kichimoto", rm: "RM567726", foto: kichimoto },
  { id: "gabriel", nome: "Gabriel Rocha Souza", rm: "RM567023", foto: gabriel },
]

export default function Integrantes() {
  const navegar = useNavigate()

  return (
    <main>
      <section className="apresentacao">
        <h2>Quem Somos</h2>
        <p>
          Somos um grupo de estudantes apaixonados por tecnologia, design e
          impacto social. Nosso propósito é desenvolver projetos que transformem
          ideias em ferramentas reais de mudança, inspirando o mesmo espírito
          solidário da Turma do Bem.
        </p>
      </section>

      <section className="integrantes-section">
        <h2>Nosso Time</h2>

        <div className="integrantes-container">
          {listaIntegrantes.map((integrante) => (
            <div
              key={integrante.id}
              className="integrante-card"
              onClick={() => navegar(`/integrantes/${integrante.id}`)}
            >
              <img src={integrante.foto} alt={`Foto de ${integrante.nome}`} />
              <h3>{integrante.nome}</h3>
              <p>{integrante.rm}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="missao">
        <h2>Nossa Missão</h2>
        <p>
          Unir propósito e tecnologia para criar soluções que gerem impacto
          positivo, transformando a vida das pessoas e inspirando novas conexões
          humanas.
        </p>
      </section>

      <section>
        <h3>Github</h3>
        <nav className="github">
          <a href="https://github.com/luisrodriguesss" target="_blank" rel="noreferrer">luisrodriguesss</a>{" "}|{" "}
          <a href="https://github.com/luizkichimoto" target="_blank" rel="noreferrer">luizkichimoto</a>{" "}|{" "}
          <a href="https://github.com/GabrielCreates" target="_blank" rel="noreferrer">gabrielcreates</a>
        </nav>
      </section>

      <section>
        <h3>Linkedin</h3>
        <nav className="linkedin">
          <a href="https://www.linkedin.com/in/luis-seripieri-1bb360395/" target="_blank" rel="noreferrer">Luis Rodrigues</a>{" "}|{" "}
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">Luiz Kichimoto</a>{" "}|{" "}
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">Gabriel Rocha</a>
        </nav>
      </section>
    </main>
  )
}