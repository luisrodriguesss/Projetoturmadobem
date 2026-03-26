export default function Contato() {
  return (
    <main>
      <section>
        <h2>Meios de contato</h2>

        <nav>
          <a href="https://www.instagram.com/ongturmadobem" target="_blank">
            Instagram
          </a>

          <p>Email: contato@turmadobem.org.br</p>
          <p>Telefone: (11) 5084-7276</p>
          <p>Endereço: Rua xxxxxxxxxxx, 100 — São Paulo, SP</p>
        </nav>
      </section>

      <section className="contato-form">
        <h2>Entre em contato</h2>

        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" />

          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" rows={5} required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  )
}