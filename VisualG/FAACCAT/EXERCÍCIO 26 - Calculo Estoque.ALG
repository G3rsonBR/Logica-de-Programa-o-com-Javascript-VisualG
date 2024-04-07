Algoritmo "Calculo Estoque"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Calcule o Estoque
// Autor(a)    : Gerson Silva
// Data atual  : 25/03/2024
Var
   quantAtual, quantMax, quantMin, calc:real

Inicio

   Escreva("Digite a quantidade atual do produto: ")
   Leia(quantAtual)
   Escreva("Digite a quantidade máxima: ")
   Leia(quantMax)
   Escreva("Digite a quantidade minima: ")
   Leia(quantMin)

   calc <- (quantMax + quantMin) / 2

   se quantAtual >= calc entao
      Escreva("Não efetuar compra!")
   senao
      Escreva("Efetuar compra")
   fimse


Fimalgoritmo