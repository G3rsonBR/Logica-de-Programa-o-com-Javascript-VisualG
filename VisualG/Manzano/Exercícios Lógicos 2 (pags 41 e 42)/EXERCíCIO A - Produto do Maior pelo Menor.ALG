Algoritmo "Exercício4A"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Produto do maior num pelo menor
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 04/04/2024
Var
   num1, num2: inteiro

Inicio
   Escreva("Digite o primeiro valor: ")
   Leia(num1)
   Escreva("Digite o segundo valor: ")
   Leia(num2)

   Se num1 > num2 entao
      Escreva("O produto do maior pelo menor é: ", num1 - num2)
   Senao
      Escreva("O produto do maior pelo menor é: ", num2 - num1)
   FimSe

Fimalgoritmo