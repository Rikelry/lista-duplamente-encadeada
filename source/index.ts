export class Elemento {
    public valor: number
    public proximo: Elemento | null
    public anterior: Elemento | null

    constructor(val: number){
        this.valor = val
        this.proximo = null
        this.anterior = null
    }
}

export class ListaDuplamenteEncadeada {
    public inicio: Elemento | null
    public fim: Elemento | null
    public tamanho: number

    constructor(){
        this.inicio = null
        this.fim = null
        this.tamanho = 0
    }

    estaVazia(): boolean {
        return this.tamanho === 0
    }
        
    adicionarNoInicio(valor: number){
        let novo = new Elemento(valor)

        if(this.inicio == null){
            this.inicio = novo
            this.fim = novo
        } else {
            novo.proximo = this.inicio
            this.inicio.anterior = novo
            this.inicio = novo
        }

        this.tamanho++
    }

    adicionarNoFinal(valor: number){
        let novo = new Elemento(valor)

        if(this.inicio == null){
            this.inicio = novo
            this.fim = novo
        } else {
            this.fim!.proximo = novo
            novo.anterior = this.fim
            this.fim = novo
        }

        this.tamanho++
    }

    adicionarNaPosicao(pos: number, valor: number){
        if(pos < 0 || pos > this.tamanho){
            console.error("Posição inválida!")
            return
        }

        if(pos === 0){
            this.adicionarNoInicio(valor)
            return
        }

        if(pos === this.tamanho){
            this.adicionarNoFinal(valor)
            return
        }

        let novo = new Elemento(valor)
        let aux = this.inicio
        let i = 0

        while(i < pos){
            aux = aux!.proximo
            i++
        }

        novo.proximo = aux
        novo.anterior = aux!.anterior
        aux!.anterior!.proximo = novo
        aux!.anterior = novo

        this.tamanho++
    }

    removerInicio(): number | null {
        if(this.inicio == null){
            return null
        }

        let valor = this.inicio.valor

        if(this.inicio == this.fim){
            this.inicio = null
            this.fim = null
        } else {
            this.inicio = this.inicio.proximo
            this.inicio!.anterior = null
        }

        this.tamanho--
        return valor
    }

    removerFinal(): number | null {
        if(this.fim == null){
            return null
        }

        let valor = this.fim.valor

        if(this.inicio == this.fim){
            this.inicio = null
            this.fim = null
        } else {
            this.fim = this.fim.anterior
            this.fim!.proximo = null
        }

        this.tamanho--
        return valor
    }

    existe(valor: number): boolean {
        let aux = this.inicio

        while(aux != null){
            if(aux.valor === valor){
                return true
            }
            aux = aux.proximo
        }

        return false
    }

    exibirInicioFim(){
        let aux = this.inicio
        while(aux != null){
            console.log(aux.valor)
            aux = aux.proximo
        }
    }

    exibirFimInicio(){
        let aux = this.fim
        while(aux != null){
            console.log(aux.valor)
            aux = aux.anterior
        }
    }
}

