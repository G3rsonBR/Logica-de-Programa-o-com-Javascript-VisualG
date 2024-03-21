Algoritmo "Ordem crescente"
// Disciplina   : [Linguagem e Lógica de Programação em JS]
// Professor   : Jailson
// Descrição   : Mostrar a ordem crescente do valor de duas entradas
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 21/03/2024
Var
   valor1, valor2:inteiro

Inicio
   Escreva("Digite um valor: ")
   Leia(valor1)
   Escreva("Digite outro valor: ")
   Leia(valor2)

   Se (valor1 > valor2) entao
      Escreva("Em ordem crecente: ", valor2, valor1)
   Senao
      Escreva("Em ordem crecente: ", valor1, valor2)
   Fimse

Fimalgoritmo