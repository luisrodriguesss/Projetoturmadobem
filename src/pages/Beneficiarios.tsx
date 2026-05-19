import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

type Beneficiario = {
  id: number
  nome: string
  cpf: string
  nascimento: string
  cep: string
  problema: string
}

export default function Beneficiarios() {
  const [beneficiarios, setBeneficiarios] = useState<Beneficiario[]>([])
  const [erro, setErro] = useState<string | null>(null)
  const [sucesso, setSucesso] = useState<string | null>(null)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Beneficiario>()

  useEffect(() => {
    const buscarBeneficiarios = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/beneficiarios`)
        if (response.ok) {
          const data: Beneficiario[] = await response.json()
          setBeneficiarios(data)
        } else {
          throw new Error("Erro ao buscar beneficiários")
        }
      } catch (error) {
        setErro("Não foi possível conectar à API. Verifique se o servidor está rodando.")
        console.error(error)
      }
    }

    buscarBeneficiarios()
  }, [])

  const aoEnviar = async (dados: Beneficiario) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/beneficiarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      })

      if (response.ok) {
        setSucesso("Beneficiário cadastrado com sucesso!")
        reset()
        setTimeout(() => setSucesso(null), 3000)
        navigate(0)
      } else {
        throw new Error("Erro ao cadastrar beneficiário")
      }
    } catch (error) {
      setErro("Erro ao cadastrar beneficiário.")
      console.error(error)
    }
  }

  const aoDeletar = async (id: number) => {
    if (!confirm("Deseja remover este beneficiário?")) return
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/beneficiarios/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setBeneficiarios(beneficiarios.filter((b) => b.id !== id))
      } else {
        throw new Error("Erro ao remover beneficiário")
      }
    } catch (error) {
      setErro("Erro ao remover beneficiário.")
      console.error(error)
    }
  }

  return (
    <main className="px-4 py-6 md:px-[5%] md:py-8 xl:px-[12%] xl:py-12">

      {/* Formulário */}
      <section className="mb-8 bg-white rounded-2xl shadow-sm p-6 md:p-8">
        <h2 className="text-[#f97316] text-xl font-semibold mb-6 border-l-[6px] border-[#a3c23e] pl-3 md:text-2xl">
          Cadastrar Beneficiário
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
            <label className="text-sm font-medium text-[#222]">Data de Nascimento</label>
            <input
              type="date"
              className="px-3 py-2 border border-[#e0e0e0] rounded-lg text-sm focus:border-[#f97316] focus:outline-none"
              {...register("nascimento", { required: "Campo obrigatório" })}
            />
            {errors.nascimento && <span className="text-red-500 text-xs">{errors.nascimento.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#222]">CEP</label>
            <input
              type="text"
              className="px-3 py-2 border border-[#e0e0e0] rounded-lg text-sm focus:border-[#f97316] focus:outline-none"
              {...register("cep", { required: "Campo obrigatório" })}
            />
            {errors.cep && <span className="text-red-500 text-xs">{errors.cep.message}</span>}
          </div>

          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-sm font-medium text-[#222]">Problema Odontológico</label>
            <textarea
              rows={3}
              className="px-3 py-2 border border-[#e0e0e0] rounded-lg text-sm resize-none focus:border-[#f97316] focus:outline-none"
              {...register("problema", { required: "Campo obrigatório" })}
            />
            {errors.problema && <span className="text-red-500 text-xs">{errors.problema.message}</span>}
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
          Beneficiários Cadastrados
        </h2>

        {beneficiarios.length === 0 && !erro && (
          <p className="text-gray-400 text-sm text-center py-8">Nenhum beneficiário cadastrado ainda.</p>
        )}

        {beneficiarios.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-500">
                  <th className="pb-3 font-medium">Nome</th>
                  <th className="pb-3 font-medium hidden md:table-cell">CPF</th>
                  <th className="pb-3 font-medium hidden md:table-cell">Nascimento</th>
                  <th className="pb-3 font-medium hidden lg:table-cell">Problema</th>
                  <th className="pb-3 font-medium">Ação</th>
                </tr>
              </thead>
              <tbody>
                {beneficiarios.map((b) => (
                  <tr key={b.id} className="border-b border-gray-100 hover:bg-[#f8f9fa] transition-colors">
                    <td className="py-3 font-medium text-[#222]">{b.nome}</td>
                    <td className="py-3 text-gray-500 hidden md:table-cell">{b.cpf}</td>
                    <td className="py-3 text-gray-500 hidden md:table-cell">{b.nascimento}</td>
                    <td className="py-3 text-gray-500 hidden lg:table-cell">{b.problema}</td>
                    <td className="py-3">
                      <button
                        onClick={() => aoDeletar(b.id)}
                        className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-xs font-medium hover:bg-red-200 transition-colors"
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
