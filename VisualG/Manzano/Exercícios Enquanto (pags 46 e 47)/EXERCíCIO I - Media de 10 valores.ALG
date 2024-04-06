Algoritmo "Exercicio5I"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Media de 10 valores
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
Var
   valor, somatoria, count: real

Inicio

   count <- 1
   Enquanto count <= 10 faca
      Escreva("Digite o", count, "° valor: ")
      Leia(valor)
      somatoria <- somatoria + valor
      count <- count + 1
   FimEnquanto
   
   Escreval("")
   Escreval("A media da soma de todos os valores passados: ", somatoria / (count - 1))

Fimalgoritmo