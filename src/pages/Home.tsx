import img1 from "../../estilo/img/img1.png"
import dentista from "../../estilo/img/imagem-dentista.png"
import apolonias from "../../estilo/img/imagem-apolonias.png"

export default function Home() {
  return (
    <main>
      <section>
        <h2>Transformando sorrisos, mudando vidas.</h2>

        <img src={img1} alt="imagem turma do bem" />

        <aside>
          <p>
            A Turma do Bem oferece triagens e tratamentos odontológicos
            gratuitos para pessoas em vulnerabilidade social.
          </p>
        </aside>
      </section>

      <section>
        <h2>Aqueles que transformamos com nosso trabalho</h2>

        <div>
          <h3>Crianças de 11 a 17 anos</h3>
          <p>
            Jovens em situação de vulnerabilidade social, sem condições
            financeiras para arcar com os custos do tratamento que possuem
            problemas bucais graves.
          </p>

          <h3>Mulheres trans e cis</h3>
          <p>
            Mulheres vítimas de violência, com dentição afetada pelas
            agressões sofridas.
          </p>
        </div>
      </section>

      <section>
        <h2>Nossas linhas de atuação</h2>

        <div>
          <h3>Dentista do Bem</h3>
          <p>
            Programa que oferece atendimento odontológico gratuito para jovens
            até 18 anos em situação de vulnerabilidade social.
          </p>
          <img src={dentista} alt="Dentista do Bem" />
        </div>

        <div>
          <h3>Apolônias do Bem</h3>
          <p>
            Atendimento para mulheres vítimas de violência, devolvendo saúde,
            autoestima e dignidade.
          </p>
          <img src={apolonias} alt="Apolônias do Bem" />
        </div>
      </section>

      <section>
        <h2>Estatísticas</h2>
        <p>+82 mil jovens atendidos</p>
        <p>+1.1 mil mulheres atendidas</p>
        <p>+18 mil dentistas voluntários</p>
      </section>
    </main>
  )
}