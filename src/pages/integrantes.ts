import luis from "../../estilo/img/fotoluis.png"
import kichimoto from "../../estilo/img/fotokichimoto.png"
import gabriel from "../../estilo/img/fotogabriel.png"

export type Integrante = {
  id: string
  nome: string
  rm: string
  turma: string
  foto: string
}

export const listaIntegrantes: Integrante[] = [
  { id: "luis", nome: "Luis Fillipe Seripieri", rm: "RM567918", turma: "1TDSPB", foto: luis },
  { id: "kichimoto", nome: "Luiz Felipe Kichimoto", rm: "RM567726", turma: "1TDSPB", foto: kichimoto },
  { id: "gabriel", nome: "Gabriel Rocha Souza", rm: "RM567023", turma: "1TDSPB", foto: gabriel },
]
