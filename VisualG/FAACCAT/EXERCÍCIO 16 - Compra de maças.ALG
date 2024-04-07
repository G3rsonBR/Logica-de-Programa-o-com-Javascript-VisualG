Algoritmo "Compra de maças"
// Disciplina   : [Linguagem e Lógica de Programação em JS]
// Professor   : Jailson
// Descrição   : Compra de maças com Se e Senao
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 21/03/2024
Var
   quantidade:inteiro

Inicio
   Escreval("Valor da maça: R$1.30, a partir de 12 unidades: R$1.00")
   Escreva("Digite a quantidade de maças: ")
   Leia(quantidade)
   Se (quantidade < 12) entao
      Escreva("Valor da Compra: ", quantidade * 1.3)
   Senao
      Escreva("Valor da Compra: ", quantidade * 1)
   Fimse

Fimalgoritmo