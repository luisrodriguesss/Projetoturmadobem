import { useState, useEffect } from "react"
import img1 from "../../estilo/img/img1.png"
import dentista from "../../estilo/img/imagem-dentista.png"
import apolonias from "../../estilo/img/imagem-apolonias.png"

type Estatistica = {
  id: number
  valor: number
  sufixo: string
  texto: string
}

const estatisticas: Estatistica[] = [
  { id: 1, valor: 82000, sufixo: "+", texto: "jovens atendidos" },
  { id: 2, valor: 1100, sufixo: "+", texto: "mulheres atendidas" },
  { id: 3, valor: 18000, sufixo: "+", texto: "dentistas voluntários" },
]

export default function Home() {
  const [mostrarEstatisticas, setMostrarEstatisticas] = useState(true)
  const [contadores, setContadores] = useState<number[]>(estatisticas.map(() => 0))

  useEffect(() => {
    if (!mostrarEstatisticas) return

    const duracao = 2000
    const intervalos = estatisticas.map((stat, indice) => {
      const passo = Math.ceil(stat.valor / (duracao / 16))
      return setInterval(() => {
        setContadores((anterior) => {
          const novos = [...anterior]
          if (novos[indice] < stat.valor) {
            novos[indice] = Math.min(novos[indice] + passo, stat.valor)
          }
          return novos
        })
      }, 16)
    })

    return () => intervalos.forEach(clearInterval)
  }, [mostrarEstatisticas])

  return (
    <main className="px-4 py-6 md:px-[5%] md:py-8 xl:px-[12%] xl:py-12">
      <section className="mb-8 bg-white rounded-2xl shadow-sm p-5 md:p-8 xl:p-12">
        <h2 className="text-[#f97316] text-xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2 md:text-2xl xl:text-3xl">
          Transformando sorrisos, mudando vidas.
        </h2>
        <img
          src={img1}
          alt="imagem turma do bem"
          className="block w-full max-w-full mx-auto my-4 rounded-xl shadow-md md:max-w-[800px] xl:max-w-[900px]"
        />
        <aside className="bg-[#f8f9fa] p-4 rounded-lg mt-3">
          <p className="text-sm md:text-base">
            A Turma do Bem oferece triagens e tratamentos odontológicos gratuitos para pessoas em vulnerabilidade social.
          </p>
        </aside>
      </section>

      <section className="mb-8 bg-white rounded-2xl shadow-sm p-5 md:p-8 xl:p-12">
        <h2 className="text-[#f97316] text-xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2 md:text-2xl">
          Aqueles que transformamos com nosso trabalho
        </h2>
        <h3 className="text-lg font-semibold mt-5 md:text-xl">Crianças de 11 a 17 anos</h3>
        <aside className="bg-[#f8f9fa] p-4 rounded-lg mt-3">
          <p className="text-sm md:text-base">Jovens em situação de vulnerabilidade social, sem condições financeiras para arcar com os custos do tratamento que possuem problemas bucais graves.</p>
        </aside>
        <h3 className="text-lg font-semibold mt-5 md:text-xl">Mulheres trans e cis</h3>
        <aside className="bg-[#f8f9fa] p-4 rounded-lg mt-3">
          <p className="text-sm md:text-base">Mulheres vítimas de violência, com dentição afetada pelas agressões sofridas.</p>
        </aside>
      </section>

      <section className="mb-8 bg-white rounded-2xl shadow-sm p-5 md:p-8 xl:p-12">
        <h2 className="text-[#f97316] text-xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2 md:text-2xl">
          Nossas linhas de atuação
        </h2>
        <h3 className="text-lg font-semibold mt-5 md:text-xl">Dentista do Bem</h3>
        <aside className="bg-[#f8f9fa] p-4 rounded-lg mt-3">
          <p className="text-sm md:text-base">O Dentista do Bem é o principal programa da Turma do Bem. Ele nasceu para cuidar de crianças e adolescentes entre 11 e 17 anos que vivem em situação de vulnerabilidade social.</p>
        </aside>
        <img src={dentista} alt="Imagem Dentista" className="block w-full max-w-full mx-auto my-4 rounded-xl shadow-md md:max-w-[80%] xl:max-w-[600px]" />

        <h3 className="text-lg font-semibold mt-5 md:text-xl">Apolônias do Bem</h3>
        <aside className="bg-[#f8f9fa] p-4 rounded-lg mt-3">
          <p className="text-sm md:text-base">O Apolônias do Bem oferece tratamento odontológico gratuito para mulheres cis e trans que tiveram seus sorrisos afetados por situações de violência.</p>
        </aside>
        <img src={apolonias} alt="Imagem Apolonias" className="block w-full max-w-full mx-auto my-4 rounded-xl shadow-md md:max-w-[80%] xl:max-w-[600px]" />
      </section>

      <section className="mb-8 bg-white rounded-2xl shadow-sm p-5 md:p-8 xl:p-12">
        <h2 className="text-[#f97316] text-xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2 md:text-2xl">
          Turma do Bem — Estatísticas
        </h2>
        <div className="text-center">
          <button
            onClick={() => setMostrarEstatisticas(!mostrarEstatisticas)}
            className="mb-6 px-5 py-2 bg-[#a3c23e] text-white rounded-lg font-semibold hover:bg-[#f97316] transition-colors duration-300"
          >
            {mostrarEstatisticas ? "Ocultar Estatísticas" : "Mostrar Estatísticas"}
          </button>

          {mostrarEstatisticas && (
            <div className="flex flex-col gap-3 items-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              {estatisticas.map((stat, indice) => (
                <p key={stat.id} className="text-base font-bold bg-[#f8f9fa] px-4 py-3 rounded-lg hover:bg-[#f97316] hover:text-white transition-colors duration-300 cursor-default w-full sm:w-auto md:text-lg">
                  {stat.sufixo}{contadores[indice].toLocaleString("pt-BR")} {stat.texto}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}