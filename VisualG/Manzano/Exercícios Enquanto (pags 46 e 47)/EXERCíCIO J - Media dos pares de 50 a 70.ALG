Algoritmo "Exercicio5J"
// Disciplina   : [Linguagem e L�gica de Programa��o com JS]
// Professor   : Jailson
// Descri��o   : Media dos pares de 50 a 70
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
Var
   ehPar, auxiliar, media, count: real

Inicio

   count <- 50
   Enquanto count <= 70 faca
      Se count % 2 = 0 entao
         ehPar <- ehPar + count
         auxiliar <- auxiliar + 1
      FimSe
      count <- count + 1
   FimEnquanto

   media <- ehPar / auxiliar
   Escreva("A m�dia da soma dos n�meros pares (entre 50 e 70) �: ", media)


Fimalgoritmo