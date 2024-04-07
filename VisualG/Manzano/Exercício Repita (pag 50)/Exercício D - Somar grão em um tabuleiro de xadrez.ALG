Algoritmo "Exercício1D"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Somar grão em um tabuleiro de xadrez
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
Var
   count, atual: real

Inicio
   Repita
      atual <- atual + (2 ^ count)
      count <- count + 1
   Até count > 64

   Escreval("(Considere o enunciado da questão...)")
   Escreva("A soma dos números de grãos em um tabuleiro de xadrez é: ", atual)
   
Fimalgoritmo