import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

type Doador = {
  id: number
  nome: string
  cpf: string
  telefone: string
  email: string
}

export default function Doadores() {
  const [doadores, setDoadores] = useState<Doador[]>([])
  const [erro, setErro] = useState<string | null>(null)
  const [sucesso, setSucesso] = useState<string | null>(null)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Doador>()

  useEffect(() => {
    const buscarDoadores = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/doadores`)
        if (response.ok) {
          const data: Doador[] = await response.json()
          setDoadores(data)
        } else {
          throw new Error("Erro ao buscar doadores")
        }
      } catch (error) {
        setErro("Não foi possível conectar à API. Verifique se o servidor está rodando.")
        console.error(error)
      }
    }

    buscarDoadores()
  }, [])

  const aoEnviar = async (dados: Doador) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/doadores`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      })

      if (response.ok) {
        setSucesso("Doador cadastrado com sucesso!")
        reset()
        setTimeout(() => setSucesso(null), 3000)
        navigate(0)
      } else {
        throw new Error("Erro ao cadastrar doador")
      }
    } catch (error) {
      setErro("Erro ao cadastrar doador.")
      console.error(error)
    }
  }

  const aoDeletar = async (id: number) => {
    if (!confirm("Deseja remover este doador?")) return
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/doadores/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setDoadores(doadores.filter((d) => d.id !== id))
      } else {
        throw new Error("Erro ao remover doador")
      }
    } catch (error) {
      setErro("Erro ao remover doador.")
      console.error(error)
    }
  }

  return (
    <main className="px-4 py-6 md:px-[5%] md:py-8 xl:px-[12%] xl:py-12">

      {/* Formulário */}
      <section className="mb-8 bg-white rounded-2xl shadow-sm p-6 md:p-8">
        <h2 className="text-[#f97316] text-xl font-semibold mb-6 border-l-[6px] border-[#a3c23e] pl-3 md:text-2xl">
          Cadastrar Doador
        </h2>

        {sucesso && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">{sucesso}</div>}
        {erro && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{erro}</div>}

        <form onSubmit={handleSubmit(aoEnviar)} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#222]">Nome</label>
            <input
              type="text"
              className="px-3 py-2 border border-[#e0e0e0] rounded-lg text-sm focus:border-[#f97316] focus:outline-none"
              {...register("nome", { required: "Campo obrigatório" })}
            />
            {errors.nome && <span className="text-red-500 text-xs">{errors.nome.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#222]">CPF</label>
            <input
              type="text"
              className="px-3 py-2 border border-[#e0e0e0] rounded-lg text-sm focus:border-[#f97316] focus:outline-none"
              {...register("cpf", { required: "Campo obrigatório" })}
            />
            {errors.cpf && <span className="text-red-500 text-xs">{errors.cpf.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#222]">Telefone</label>
            <input
              type="tel"
              className="px-3 py-2 border border-[#e0e0e0] rounded-lg text-sm focus:border-[#f97316] focus:outline-none"
              {...register("telefone", { required: "Campo obrigatório" })}
            />
            {errors.telefone && <span className="text-red-500 text-xs">{errors.telefone.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#222]">Email</label>
            <input
              type="email"
              className="px-3 py-2 border border-[#e0e0e0] rounded-lg text-sm focus:border-[#f97316] focus:outline-none"
              {...register("email", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Digite um e-mail válido",
                },
              })}
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-[#a3c23e] text-white rounded-lg font-semibold hover:bg-[#f97316] transition-colors duration-300"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </section>

      {/* Listagem */}
      <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
        <h2 className="text-[#f97316] text-xl font-semibold mb-6 border-l-[6px] border-[#a3c23e] pl-3 md:text-2xl">
          Doadores Cadastrados
        </h2>

        {doadores.length === 0 && !erro && (
          <p className="text-gray-400 text-sm text-center py-8">Nenhum doador cadastrado ainda.</p>
        )}

        {doadores.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-500">
                  <th className="pb-3 font-medium">Nome</th>
                  <th className="pb-3 font-medium hidden md:table-cell">CPF</th>
                  <th className="pb-3 font-medium hidden md:table-cell">Telefone</th>
                  <th className="pb-3 font-medium hidden lg:table-cell">Email</th>
                  <th className="pb-3 font-medium">Ação</th>
                </tr>
              </thead>
              <tbody>
                {doadores.map((d) => (
                  <tr key={d.id} className="border-b border-gray-100 hover:bg-[#f8f9fa] transition-colors">
                    <td className="py-3 font-medium text-[#222]">{d.nome}</td>
                    <td className="py-3 text-gray-500 hidden md:table-cell">{d.cpf}</td>
                    <td className="py-3 text-gray-500 hidden md:table-cell">{d.telefone}</td>
                    <td className="py-3 text-gray-500 hidden lg:table-cell">{d.email}</td>
                    <td className="py-3">
                      <button
                        onClick={() => aoDeletar(d.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-lg text-xs font-medium hover:bg-red-600 transition-colors"
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  )
}
