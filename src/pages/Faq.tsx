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
      <section className="mb-8 bg-white rounded-2xl shadow-sm p-5 md:p-8 xl:p-12">
        <h2 className="text-[#f97316] text-xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2 md:text-2xl">
          Perguntas Frequentes (FAQ)
        </h2>
        <p className="mb-6 text-sm md:text-base">
          Confira abaixo as respostas para as principais dúvidas sobre a Turma do Bem e nossos programas.
        </p>

        {perguntas.map((item) => (
          <div key={item.id} className="mb-4">
            <h3
              onClick={() => alternarPergunta(item.id)}
              className="text-base font-semibold mt-5 cursor-pointer hover:text-[#f97316] transition-colors duration-300 md:text-xl"
            >
              {item.pergunta}
            </h3>
            {aberta === item.id && (
              <aside className="bg-[#f8f9fa] p-4 rounded-lg mt-3">
                <p className="text-sm md:text-base">{item.resposta}</p>
              </aside>
            )}
          </div>
        ))}
      </section>
    </main>
  )
}