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

      {/* Hero */}
      <section className="mb-8 bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-center p-8 md:w-1/2 xl:p-12">
            <span className="text-[#a3c23e] font-semibold text-sm uppercase tracking-widest mb-3">ONG Turma do Bem</span>
            <h1 className="text-3xl font-bold text-[#222] leading-tight mb-4 md:text-4xl xl:text-5xl">
              Transformando <span className="text-[#f97316]">sorrisos,</span> mudando vidas.
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              A Turma do Bem oferece triagens e tratamentos odontológicos gratuitos para pessoas em situação de vulnerabilidade social.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={img1}
              alt="Turma do Bem"
              className="w-full h-full object-cover max-h-[350px] md:max-h-full"
            />
          </div>
        </div>
      </section>

      {/* Públicos atendidos */}
      <section className="mb-8 bg-white rounded-2xl shadow-sm p-6 md:p-8">
        <h2 className="text-[#f97316] text-xl font-semibold mb-6 border-l-[6px] border-[#a3c23e] pl-3 md:text-2xl">
          Aqueles que transformamos com nosso trabalho
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-[#f8f9fa] rounded-xl p-5 border-l-4 border-[#a3c23e]">
            <h3 className="text-base font-semibold text-[#222] mb-2 md:text-lg">Crianças de 11 a 17 anos</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Jovens em situação de vulnerabilidade social, sem condições financeiras para arcar com os custos do tratamento que possuem problemas bucais graves.
            </p>
          </div>
          <div className="bg-[#f8f9fa] rounded-xl p-5 border-l-4 border-[#f97316]">
            <h3 className="text-base font-semibold text-[#222] mb-2 md:text-lg">Mulheres trans e cis</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Mulheres vítimas de violência, com dentição afetada pelas agressões sofridas.
            </p>
          </div>
        </div>
      </section>

      {/* Linhas de atuação */}
      <section className="mb-8 bg-white rounded-2xl shadow-sm p-6 md:p-8">
        <h2 className="text-[#f97316] text-xl font-semibold mb-6 border-l-[6px] border-[#a3c23e] pl-3 md:text-2xl">
          Nossas linhas de atuação
        </h2>

        <div className="flex flex-col gap-8">
          {/* Dentista do Bem */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <div className="md:w-1/2">
              <h3 className="text-lg font-semibold text-[#222] mb-2">Dentista do Bem</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                O Dentista do Bem é o principal programa da Turma do Bem. Ele nasceu para cuidar de crianças e adolescentes entre 11 e 17 anos que vivem em situação de vulnerabilidade social.
              </p>
            </div>
            <img
              src={dentista}
              alt="Dentista do Bem"
              className="w-full rounded-xl shadow-md object-cover md:w-1/2 max-h-[250px]"
            />
          </div>

          <div className="w-full h-px bg-gray-100" />

          {/* Apolônias do Bem */}
          <div className="flex flex-col gap-4 md:flex-row-reverse md:items-center md:gap-8">
            <div className="md:w-1/2">
              <h3 className="text-lg font-semibold text-[#222] mb-2">Apolônias do Bem</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                O Apolônias do Bem oferece tratamento odontológico gratuito para mulheres cis e trans que tiveram seus sorrisos afetados por situações de violência.
              </p>
            </div>
            <img
              src={apolonias}
              alt="Apolônias do Bem"
              className="w-full rounded-xl shadow-md object-cover md:w-1/2 max-h-[250px]"
            />
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="mb-8 bg-[#a3c23e] rounded-2xl shadow-sm p-6 md:p-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-white text-xl font-semibold md:text-2xl">
            Nosso Impacto
          </h2>
          <button
            onClick={() => setMostrarEstatisticas(!mostrarEstatisticas)}
            className="px-4 py-2 bg-white text-[#a3c23e] rounded-full text-sm font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300"
          >
            {mostrarEstatisticas ? "Ocultar" : "Mostrar"}
          </button>
        </div>

        {mostrarEstatisticas && (
          <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-3">
            {estatisticas.map((stat, indice) => (
              <div key={stat.id} className="bg-white rounded-xl p-5 text-center shadow-sm">
                <p className="text-3xl font-bold text-[#f97316] md:text-4xl">
                  {stat.sufixo}{contadores[indice].toLocaleString("pt-BR")}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.texto}</p>
              </div>
            ))}
          </div>
        )}
      </section>

    </main>
  )
}