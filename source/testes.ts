import { ListaDuplamenteEncadeada } from "./index.js"

let lista = new ListaDuplamenteEncadeada()

lista.adicionarNoInicio(10)
lista.adicionarNoFinal(20)
lista.adicionarNoFinal(30)
lista.adicionarNaPosicao(1, 15)

console.log("Inicio → Fim")
lista.exibirInicioFim()

console.log("Fim → Inicio")
lista.exibirFimInicio()

console.log("Remove início:", lista.removerInicio())
console.log("Remove final:", lista.removerFinal())

lista.exibirInicioFim()