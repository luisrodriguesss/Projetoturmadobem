import img1 from "../../estilo/img/img1.png"
import dentista from "../../estilo/img/imagem-dentista.png"
import apolonias from "../../estilo/img/imagem-apolonias.png"

export default function Home() {
  return (
    <main>
      <section>
        <h2>Transformando sorrisos, mudando vidas.</h2>

        <img
          className="foto-principal"
          src={img1}
          alt="imagem turma do bem"
        />

        <aside className="aside-1">
          <p>
            A Turma do Bem oferece triagens e tratamentos odontológicos gratuitos
            para pessoas em vulnerabilidade social.
          </p>
        </aside>
      </section>

      <section>
        <h2>Aqueles que transformamos com nosso trabalho</h2>

        <div>
          <h3>Crianças de 11 a 17 anos</h3>
          <aside>
            <p>
              Jovens em situação de vulnerabilidade social, sem condições
              financeiras para arcar com os custos do tratamento que possuem
              problemas bucais graves.
            </p>
          </aside>

          <h3>Mulheres trans e cis</h3>
          <aside>
            <p>
              Mulheres vítimas de violência, com dentição afetada pelas
              agressões sofridas.
            </p>
          </aside>
        </div>
      </section>

      <section>
        <h2>Nossas linhas de atuação</h2>

        <div>
          <h3>Dentista do Bem</h3>
          <aside>
            <p>
              O Dentista do Bem é o principal programa da Turma do Bem. Ele nasceu
              para cuidar de crianças e adolescentes entre 11 e 17 anos que vivem
              em situação de vulnerabilidade social.
            </p>
          </aside>

          <img src={dentista} alt="Imagem Dentista" />
        </div>

        <div>
          <h3>Apolônias do Bem</h3>
          <aside>
            <p>
              O Apolônias do Bem oferece tratamento odontológico gratuito para
              mulheres cis e trans que tiveram seus sorrisos afetados por
              situações de violência.
            </p>
          </aside>

          <img src={apolonias} alt="Imagem Apolonias" />
        </div>
      </section>

      <section className="estatisticas">
        <h2>Turma do Bem - Estatísticas</h2>
        <p>+82 mil jovens atendidos</p>
        <p>+1.1 mil mulheres atendidas</p>
        <p>+18 mil dentistas voluntários</p>
      </section>
    </main>
  )
}