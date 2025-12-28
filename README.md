# Lista Duplamente Encadeada em TypeScript
## 👥 Integrantes

- Rikelry Monteiro Souza @Rikelry

## 📌 Descrição do projeto

Este projeto implementa um **Tipo de Dado Abstrato (TDA)** chamado:

**Lista Duplamente Encadeada**

Ela funciona parecida com uma lista comum, mas cada elemento sabe:

- quem vem depois dele (```proximo```)
- quem vem antes dele (```anterior```)

Tudo foi feito:

- ✔ usando classes
- ✔ sem usar ```Array```, ```List``` ou bibliotecas externas
- ✔ apenas com ponteiros (referências entre objetos)

## 🏗️ Estrutura principal

A lista é formada por dois tipos de objetos:

**1️⃣ Elemento**

Representa um nó da lista.

Ele guarda:

- valor
- referência para o próximo elemento
- referência para o elemento anterior

**2️⃣ ListaDuplamenteEncadeada**

Controla a lista.

Ela guarda:

- início da lista
- fim da lista
- quantidade de elementos

E possui métodos para:

- adicionar no início
- adicionar no final
- adicionar em posição específica
- remover do início
- remover do fim
- remover em posição específica
- verificar se existe um valor
- verificar se está vazia
- exibir do início para o fim
- exibir do fim para o início

## ▶️ Como executar o projeto
**0️⃣ Instalar Node.js (se ainda não tiver)**

O projeto precisa do Node.js (o NPM já vem junto).

1. Baixe o instalador no site oficial:
https://nodejs.org
2. Instale clicando “Next, Next…” (padrão mesmo).

Para conferir se deu certo, abra o terminal e rode:
```
node -v
npm -v
```

Se aparecer versão, tá tudo certo 👍

No Linux (Ubuntu/Debian), também dá pra instalar com:

```
sudo apt install nodejs npm
```


**1️⃣ (Opcional) Instalar o Git**

```
sudo apt install git
```

Ou baixe aqui:

https://git-scm.com

**2️⃣ Clonar o repositório**

```
git clone https://github.com/Rikelry/lista-duplamente-encadeada.git
cd lista-duplamente-encadeada
```

**3️⃣ Instalar as dependências**
```
npm install
```

**4️⃣ Rodar o projeto**
```
npm run start
```

O terminal vai mostrar algo como:

Server running at ```http://localhost:1234```

Se não abrir sozinho:

👉 copie o link e cole no navegador

👉 ou CTRL + clique em ```http://localhost:1234``` no terminal.

Depois, abra o Console do navegador (F12 → Console) para ver os testes.
## 🧪 Exemplos de uso (arquivo de testes)

No arquivo ```testes.ts```, por exemplo:
```
let lista = new ListaDuplamenteEncadeada()

lista.adicionarNoInicio(10)
lista.adicionarNoFinal(20)
lista.adicionarNoFinal(30)
lista.adicionarNaPosicao(1, 15)

console.log("Início → Fim")
lista.exibirInicioFim()

console.log("Fim → Início")
lista.exibirFimInicio()

console.log("Remove início:", lista.removerInicio())
console.log("Remove final:", lista.removerFinal())

lista.exibirInicioFim()
```
## 🎯 Objetivo pedagógico

Este trabalho ajuda a entender:

- como estruturas de dados funcionam “por dentro”
- como ponteiros (referências) ligam objetos
- diferença entre lista encadeada e array
- manipulação de memória passo a passo
