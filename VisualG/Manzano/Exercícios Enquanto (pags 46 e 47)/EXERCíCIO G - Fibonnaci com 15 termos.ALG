Algoritmo "Exercicio5G"
// Disciplina   : [Linguagem e L�gica de Programa��o com JS]
// Professor   : Jailson
// Descri��o   : Escreve uma sequ�ncia de Fibonnaci com 15 termos
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
Var
   n1, n2, nth, count: inteiro

Inicio

   Enquanto count <= 15 faca
      Se count = 0 entao
         n1 <- 1
      FimSe

      Escreval("Passo ", count, "�: ", nth)

      nth <- n1 + n2
      n1 <- n2
      n2 <- nth

      count <- count + 1
   FimEnquanto

Fimalgoritmo