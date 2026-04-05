export default function Sobre() {
  
  return (
    <main className="px-[5%] py-8">

      <section className="mb-12 bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-[#f97316] text-2xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2">
          Sobre o Projeto
        </h2>
        <p className="mt-2">
          A Turma do Bem é uma ONG que realiza atendimentos odontológicos gratuitos para pessoas em situação de
          vulnerabilidade social. Entretanto, um dos principais desafios enfrentados pela equipe é a falta de
          integração entre seus canais de comunicação e controle de cadastros.
        </p>

        <p className="mt-2">
          Atualmente, os contatos com pacientes, voluntários e doadores são feitos por diferentes meios, o que
          gera dificuldade de organização, perda de informações e lentidão nos atendimentos.
        </p>

        <p className="mt-2">
          Além disso, a ausência de um sistema unificado impede que a ONG acompanhe com eficiência o progresso dos
          atendimentos e a origem das doações. O site proposto vem justamente para resolver esse problema.
        </p>

        <p className="mt-2">
          Através de uma plataforma web centralizada, todos os públicos da ONG poderão se conectar em um único
          ambiente digital.
        </p>
      </section>

      <section className="mb-12 bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-[#f97316] text-2xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2">
          Ideia
        </h2>

        <p className="mt-2">
          O objetivo é tornar a experiência do visitante informativa, acolhedora e visualmente alinhada com a
          identidade da ONG, destacando o compromisso com a transformação de vidas por meio do cuidado odontológico.
        </p>
        
        <p className="mt-2">
          O usuário pode conhecer um pouco do projeto e proposta da ONG Turma do Bem e podendo tirar algumas
          dúvidas frequentes pela aba de FAQ.
        </p>
      </section>

      <section className="mb-12 bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-[#f97316] text-2xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2">
          Tecnologias Utilizadas
        </h2>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>React 19 — interface e componentização com arquitetura moderna.</li>
          <li>Vite — build rápido e ambiente de desenvolvimento otimizado.</li>
          <li>TypeScript — tipagem estática para código mais seguro e escalável.</li>
          <li>Tailwind CSS — estilização responsiva com classes utilitárias.</li>
          <li>React Router DOM — navegação entre páginas como SPA.</li>
          <li>React Hook Form — validação de formulários com performance otimizada.</li>
        </ul>
      </section>

      <section className="mb-12 bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-[#f97316] text-2xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2">
          Roadmap da Primeira Sprint - Front end
        </h2>

        <div className="mt-5">
          <h3 className="text-xl font-semibold">Primeira Etapa — Estrutura</h3>
          <aside className="bg-[#f8f9fa] p-4 rounded-lg mt-3">
            <p>Definição das páginas principais (Home, Contato, FAQ, Quem Somos, Sobre) e da hierarquia HTML.</p>
          </aside>
        </div>

        <div className="mt-5">
          <h3 className="text-xl font-semibold">Segunda Etapa — Identidade Visual</h3>
          <aside className="bg-[#f8f9fa] p-4 rounded-lg mt-3">
            <p>Criação do CSS com base nas cores e tipografia do logotipo da Turma do Bem, priorizando clareza e acessibilidade.</p>
          </aside>
        </div>

        <div className="mt-5">
          <h3 className="text-xl font-semibold">Terceira Etapa — Conteúdo Institucional</h3>
          <aside className="bg-[#f8f9fa] p-4 rounded-lg mt-3">
            <p>Inserção de textos explicativos sobre os programas, beneficiários e impacto social da ONG.</p>
          </aside>
        </div>

        <div className="mt-5">
          <h3 className="text-xl font-semibold">Quarta Etapa — Expansão e Integração</h3>
          <aside className="bg-[#f8f9fa] p-4 rounded-lg mt-3">
            <p>Planejamento de futuras funcionalidades: área de voluntários, formulário de doações e blog de impacto social.</p>
          </aside>
        </div>
      </section>
    </main>
  )
}