import { useState } from "react"

type Pergunta = {
  id: number
  pergunta: string
  resposta: string
}

const perguntas: Pergunta[] = [
  {
    id: 1,
    pergunta: "O que é a Turma do Bem?",
    resposta: "A Turma do Bem é uma organização sem fins lucrativos que oferece tratamento odontológico gratuito para crianças, adolescentes e mulheres em situação de vulnerabilidade social.",
  },
  {
    id: 2,
    pergunta: "Quem pode participar dos programas?",
    resposta: "Atendemos jovens entre 11 e 17 anos e mulheres cis ou trans vítimas de violência que não têm condições financeiras para arcar com o tratamento odontológico.",
  },
  {
    id: 3,
    pergunta: "Como posso me cadastrar ou participar?",
    resposta: "As triagens são realizadas periodicamente. Fique atento às divulgações oficiais da Turma do Bem para saber quando haverá uma seleção em sua cidade.",
  },
  {
    id: 4,
    pergunta: "Os dentistas são voluntários?",
    resposta: "Sim! Todos os atendimentos são realizados por dentistas voluntários que fazem parte da rede da Turma do Bem, em seus próprios consultórios.",
  },
  {
    id: 5,
    pergunta: "Como posso ajudar a causa?",
    resposta: "Você pode contribuir sendo voluntário, divulgando nossos programas ou fazendo doações que ajudam a manter os atendimentos gratuitos.",
  },
]

export default function Faq() {
  const [aberta, setAberta] = useState<number | null>(null)

  function alternarPergunta(id: number) {
    setAberta(aberta === id ? null : id)
  }

  return (
    <main className="px-4 py-6 md:px-[5%] md:py-8 xl:px-[12%] xl:py-12">
      <section className="mb-8 bg-white rounded-2xl shadow-sm p-6 md:p-8">
        <h2 className="text-[#f97316] text-xl font-semibold mb-2 border-l-[6px] border-[#a3c23e] pl-3 md:text-2xl">
          Perguntas Frequentes (FAQ)
        </h2>
        <p className="text-gray-500 text-sm mb-6 md:text-base">
          Confira abaixo as respostas para as principais dúvidas sobre a Turma do Bem e nossos programas.
        </p>

        <div className="flex flex-col gap-3">
          {perguntas.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${aberta === item.id ? "border-[#a3c23e]" : "border-gray-200"}`}
            >
              <button
                onClick={() => alternarPergunta(item.id)}
                className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-[#f8f9fa] transition-colors duration-200"
              >
                <span className={`text-sm font-semibold md:text-base ${aberta === item.id ? "text-[#f97316]" : "text-[#222]"}`}>
                  {item.pergunta}
                </span>
                <span className={`text-xl font-light ml-4 transition-transform duration-300 ${aberta === item.id ? "text-[#a3c23e] rotate-45" : "text-gray-400"}`}>
                  +
                </span>
              </button>

              {aberta === item.id && (
                <div className="px-5 pb-4 bg-[#f8f9fa]">
                  <p className="text-sm text-gray-600 leading-relaxed md:text-base">
                    {item.resposta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}