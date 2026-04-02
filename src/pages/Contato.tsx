import { useForm } from "react-hook-form"

type DadosContato = {
  nome: string
  email: string
  telefone?: string
  mensagem: string
}

export default function Contato() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DadosContato>()

  function aoEnviar(dados: DadosContato) {
    alert(`Obrigado, ${dados.nome}! Sua mensagem foi enviada com sucesso.`)
    reset()
  }

  return (
    <main>
      <section>
        <h2>Meios de contato</h2>
        <nav>
          <a href="https://www.instagram.com/ongturmadobem" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <p>Email: contato@turmadobem.org.br</p>
          <p>Telefone: (11) 5084-7276</p>
          <p>Endereço: Rua Sousa Ramos, 311, Vila Mariana, São Paulo - SP, Brasil</p>
        </nav>
      </section>

      <section className="contato-form">
        <h2>Entre em contato</h2>

        <form onSubmit={handleSubmit(aoEnviar)}>
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            {...register("nome", { required: "Este campo é obrigatório" })}
          />
          {errors.nome && <span className="erro">{errors.nome.message}</span>}

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Este campo é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Digite um e-mail válido",
              },
            })}
          />
          {errors.email && <span className="erro">{errors.email.message}</span>}

          <label htmlFor="telefone">Telefone:</label>
          <input
            id="telefone"
            type="tel"
            {...register("telefone")}
          />

          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            rows={5}
            {...register("mensagem", { required: "Este campo é obrigatório" })}
          />
          {errors.mensagem && <span className="erro">{errors.mensagem.message}</span>}

          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  )
}