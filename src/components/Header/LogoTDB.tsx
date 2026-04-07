import logo from "../../../estilo/img/logo.png"

export function Logo() {
  return (
    <div className="flex items-center">
      <img src={logo} alt="logo" className="w-[60px] h-auto md:w-[75px]" />
      <h1 className="text-xl font-semibold ml-3 tracking-wide md:text-2xl lg:text-3xl">
        Turma do Bem
      </h1>
    </div>
  )
}