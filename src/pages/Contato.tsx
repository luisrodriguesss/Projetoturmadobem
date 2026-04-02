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
    <main className="px-[5%] py-8">
      <section className="mb-12 bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-[#f97316] text-2xl font-semibold mb-4 border-l-[6px] border-[#a3c23e] pl-2">
          Meios de contato
        </h2>
        <nav className="flex flex-col gap-2 mt-2">
          <a
            href="https://www.instagram.com/ongturmadobem"
            target="_blank"
            rel="noreferrer"
            className="text-[#f97316] hover:underline font-medium"
          >
            Instagram
          </a>
          <p>Email: contato@turmadobem.org.br</p>
          <p>Telefone: (11) 5084-7276</p>
          <p>Endereço: Rua xxxxxxxxxxx, 100 — São Paulo, SP</p>
        </nav>
      </section>

      <section className="bg-white rounded-2xl shadow-sm p-8 max-w-[600px] mx-auto">
        <h2 className="text-[#f97316] text-2xl font-semibold mb-6 text-center">
          Entre em contato
        </h2>

        <form onSubmit={handleSubmit(aoEnviar)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="nome" className="font-medium text-[#222]">Nome:</label>
            <input
              id="nome"
              type="text"
              className="px-3 py-3 border border-[#e0e0e0] rounded-lg text-sm font-[inherit] focus:border-[#f97316] focus:shadow-[0_0_6px_rgba(249,115,22,0.3)] focus:outline-none"
              {...register("nome", { required: "Este campo é obrigatório" })}
            />
            {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium text-[#222]">Email:</label>
            <input
              id="email"
              type="email"
              className="px-3 py-3 border border-[#e0e0e0] rounded-lg text-sm font-[inherit] focus:border-[#f97316] focus:shadow-[0_0_6px_rgba(249,115,22,0.3)] focus:outline-none"
              {...register("email", {
                required: "Este campo é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Digite um e-mail válido",
                },
              })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="telefone" className="font-medium text-[#222]">Telefone:</label>
            <input
              id="telefone"
              type="tel"
              className="px-3 py-3 border border-[#e0e0e0] rounded-lg text-sm font-[inherit] focus:border-[#f97316] focus:shadow-[0_0_6px_rgba(249,115,22,0.3)] focus:outline-none"
              {...register("telefone")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="mensagem" className="font-medium text-[#222]">Mensagem:</label>
            <textarea
              id="mensagem"
              rows={5}
              className="px-3 py-3 border border-[#e0e0e0] rounded-lg text-sm font-[inherit] resize-none focus:border-[#f97316] focus:shadow-[0_0_6px_rgba(249,115,22,0.3)] focus:outline-none"
              {...register("mensagem", { required: "Este campo é obrigatório" })}
            />
            {errors.mensagem && <span className="text-red-500 text-sm">{errors.mensagem.message}</span>}
          </div>

          <button
            type="submit"
            className="bg-[#a3c23e] text-white border-none rounded-lg py-3 text-base font-semibold cursor-pointer hover:bg-[#f97316] hover:scale-[1.03] transition-all duration-300"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  )
}