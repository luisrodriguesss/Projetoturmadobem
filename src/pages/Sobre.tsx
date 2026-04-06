export default function Sobre() {
  return (
    <main className="px-4 py-6 md:px-[5%] md:py-8 xl:px-[12%] xl:py-12">
      <section className="mb-8 bg-white rounded-2xl shadow-sm p-5 md:p-8 xl:p-12">
        <h2 className="text-[#f97316] text-xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2 md:text-2xl">
          Sobre o Projeto
        </h2>
        <p className="mt-2 text-sm md:text-base">
          A Turma do Bem é uma ONG que realiza atendimentos odontológicos gratuitos para pessoas em situação de vulnerabilidade social. Entretanto, um dos principais desafios enfrentados pela equipe é a falta de integração entre seus canais de comunicação e controle de cadastros.
        </p>
        <p className="mt-2 text-sm md:text-base">
          Atualmente, os contatos com pacientes, voluntários e doadores são feitos por diferentes meios, o que gera dificuldade de organização, perda de informações e lentidão nos atendimentos.
        </p>
        <p className="mt-2 text-sm md:text-base">
          Além disso, a ausência de um sistema unificado impede que a ONG acompanhe com eficiência o progresso dos atendimentos e a origem das doações. O site proposto vem justamente para resolver esse problema.
        </p>
        <p className="mt-2 text-sm md:text-base">
          Através de uma plataforma web centralizada, todos os públicos da ONG poderão se conectar em um único ambiente digital.
        </p>
      </section>

      <section className="mb-8 bg-white rounded-2xl shadow-sm p-5 md:p-8 xl:p-12">
        <h2 className="text-[#f97316] text-xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2 md:text-2xl">
          Ideia
        </h2>
        <p className="mt-2 text-sm md:text-base">
          O objetivo é tornar a experiência do visitante informativa, acolhedora e visualmente alinhada com a identidade da ONG, destacando o compromisso com a transformação de vidas por meio do cuidado odontológico.
        </p>
        <p className="mt-2 text-sm md:text-base">
          O usuário pode conhecer um pouco do projeto e proposta da ONG Turma do Bem e podendo tirar algumas dúvidas frequentes pela aba de FAQ.
        </p>
      </section>

      <section className="mb-8 bg-white rounded-2xl shadow-sm p-5 md:p-8 xl:p-12">
        <h2 className="text-[#f97316] text-xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2 md:text-2xl">
          Tecnologias Utilizadas
        </h2>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-sm md:text-base">
          <li>React 19 — Interface e componentização.</li>
          <li>Vite 8 — Build e performance.</li>
          <li>TypeScript — Tipagem estática obrigatória.</li>
          <li>Tailwind CSS 4 — Estilização responsiva.</li>
          <li>React Router DOM 7 — Navegação SPA.</li>
          <li>React Hook Form — Validação de formulários.</li>
        </ul>
      </section>

      <section className="mb-8 bg-white rounded-2xl shadow-sm p-5 md:p-8 xl:p-12">
        <h2 className="text-[#f97316] text-xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2 md:text-2xl">
          Roadmap da Sprint 03
        </h2>
        <div className="mt-5">
          <h3 className="text-base font-semibold md:text-xl">Primeira Etapa — Estrutura</h3>
          <aside className="bg-[#f8f9fa] p-4 rounded-lg mt-3">
            <p className="text-sm md:text-base">Definição das páginas principais (Home, Contato, FAQ, Quem Somos, Sobre) e da hierarquia HTML.</p>
          </aside>
        </div>
        <div className="mt-5">
          <h3 className="text-base font-semibold md:text-xl">Segunda Etapa — Identidade Visual</h3>
          <aside className="bg-[#f8f9fa] p-4 rounded-lg mt-3">
            <p className="text-sm md:text-base">Criação do CSS com base nas cores e tipografia do logotipo da Turma do Bem, priorizando clareza e acessibilidade.</p>
          </aside>
        </div>
        <div className="mt-5">
          <h3 className="text-base font-semibold md:text-xl">Terceira Etapa — Conteúdo Institucional</h3>
          <aside className="bg-[#f8f9fa] p-4 rounded-lg mt-3">
            <p className="text-sm md:text-base">Inserção de textos explicativos sobre os programas, beneficiários e impacto social da ONG.</p>
          </aside>
        </div>
        <div className="mt-5">
          <h3 className="text-base font-semibold md:text-xl">Quarta Etapa — Expansão e Integração</h3>
          <aside className="bg-[#f8f9fa] p-4 rounded-lg mt-3">
            <p className="text-sm md:text-base">Planejamento de futuras funcionalidades: área de voluntários, formulário de doações e blog de impacto social.</p>
          </aside>
        </div>
      </section>
    </main>
  )
}