import luis from "../../estilo/img/fotoluis.png"
import kichimoto from "../../estilo/img/fotokichimoto.png"
import gabriel from "../../estilo/img/fotogabriel.png"

export default function Integrantes() {
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
          <div className="integrante-card">
            <img src={luis} alt="Foto do Luis" />
            <h3>Luis Fillipe Seripieri RM567918</h3>
          </div>

          <div className="integrante-card">
            <img src={kichimoto} alt="Foto do Kichimoto" />
            <h3>Luiz Felipe Kichimoto RM567726</h3>
          </div>

          <div className="integrante-card">
            <img src={gabriel} alt="Foto do Gabriel" />
            <h3>Gabriel Rocha Souza RM567023</h3>
          </div>
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
          <a href="https://github.com/luisrodriguesss" target="_blank">
            luisrodriguesss
          </a>{" "}
          |{" "}
          <a href="https://github.com/luizkichimoto" target="_blank">
            luizkichimoto
          </a>{" "}
          |{" "}
          <a href="https://github.com/GabrielCreates" target="_blank">
            gabrielcreates
          </a>
        </nav>
      </section>

      <section>
        <h3>Linkedin</h3>
        <nav className="linkedin">
          <a
            href="https://www.linkedin.com/in/luis-seripieri-1bb360395/"
            target="_blank"
          >
            Luis Rodrigues
          </a>{" "}
          |{" "}
          <a href="https://www.linkedin.com/feed/" target="_blank">
            Luiz Kichimoto
          </a>{" "}
          |{" "}
          <a href="https://www.linkedin.com/feed/" target="_blank">
            Gabriel Rocha
          </a>
        </nav>
      </section>
    </main>
  )
}