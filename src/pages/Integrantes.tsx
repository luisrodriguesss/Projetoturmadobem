import { useNavigate } from "react-router-dom"
import luis from "../../estilo/img/fotoluis.png"
import kichimoto from "../../estilo/img/fotokichimoto.png"
import gabriel from "../../estilo/img/fotogabriel.png"

type Integrante = {
  id: string
  nome: string
  rm: string
  turma: string
  foto: string
}

export const listaIntegrantes: Integrante[] = [
  { id: "luis", nome: "Luis Fillipe Seripieri", rm: "RM567918", turma: "1TDSB", foto: luis },
  { id: "kichimoto", nome: "Luiz Felipe Kichimoto", rm: "RM567726", turma: "1TDSB", foto: kichimoto },
  { id: "gabriel", nome: "Gabriel Rocha Souza", rm: "RM567023", turma: "1TDSB", foto: gabriel },
]

export default function Integrantes() {
  const navegar = useNavigate()

  return (
    <main className="px-[5%] py-8">
      <section className="mb-12 bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-[#f97316] text-2xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2">
          Quem Somos
        </h2>
        <p className="mt-2">
          Somos um grupo de estudantes apaixonados por tecnologia, design e impacto social.
          Nosso propósito é desenvolver projetos que transformem ideias em ferramentas reais de mudança,
          inspirando o mesmo espírito solidário da Turma do Bem.
        </p>
      </section>

      <section className="mb-12 bg-white rounded-2xl shadow-sm p-8 text-center">
        <h2 className="text-[#f97316] text-2xl font-semibold mb-8 border-l-[6px] border-[#a3c23e] pl-2 text-left">
          Nosso Time
        </h2>

        <div className="flex justify-center flex-wrap gap-12 mt-4">
          {listaIntegrantes.map((integrante) => (
            <div
              key={integrante.id}
              onClick={() => navegar(`/integrantes/${integrante.id}`)}
              className="bg-white rounded-2xl shadow-md w-[260px] p-5 text-center cursor-pointer hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={integrante.foto}
                alt={`Foto de ${integrante.nome}`}
                className="w-[220px] h-[220px] rounded-lg object-cover mb-3 mx-auto"
              />
              <h3 className="text-xl text-[#333] mt-1">{integrante.nome}</h3>
              <p className="text-sm text-gray-500 mt-1">{integrante.rm}</p>
              <p className="text-sm text-gray-500">{integrante.turma}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-white rounded-2xl shadow-sm p-8 text-center">
        <h2 className="text-[#f97316] text-2xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2 text-left">
          Nossa Missão
        </h2>
        <p className="mt-2">
          Unir propósito e tecnologia para criar soluções que gerem impacto positivo,
          transformando a vida das pessoas e inspirando novas conexões humanas.
        </p>
      </section>

      <section className="mb-6 bg-white rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-semibold mb-3">Github</h3>
        <nav className="flex gap-2 flex-wrap">
          <a href="https://github.com/luisrodriguesss" target="_blank" rel="noreferrer" className="text-[#f97316] hover:underline">luisrodriguesss</a>
          <span>|</span>
          <a href="https://github.com/luizkichimoto" target="_blank" rel="noreferrer" className="text-[#f97316] hover:underline">luizkichimoto</a>
          <span>|</span>
          <a href="https://github.com/GabrielCreates" target="_blank" rel="noreferrer" className="text-[#f97316] hover:underline">gabrielcreates</a>
        </nav>
      </section>

      <section className="mb-12 bg-white rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-semibold mb-3">Linkedin</h3>
        <nav className="flex gap-2 flex-wrap">
          <a href="https://www.linkedin.com/in/luis-seripieri-1bb360395/" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:underline">Luis Rodrigues</a>
          <span>|</span>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:underline">Luiz Kichimoto</a>
          <span>|</span>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:underline">Gabriel Rocha</a>
        </nav>
      </section>
    </main>
  )
}