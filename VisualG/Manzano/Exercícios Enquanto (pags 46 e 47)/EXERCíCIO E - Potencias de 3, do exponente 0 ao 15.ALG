Algoritmo "Exerc�cio5E"
// Disciplina   : [Linguagem e L�gica de Programa��o com JS]
// Professor   : Jailson
// Descri��o   : Potencias de 3, do exponente 0 ao 15
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 05/04/2024
Var
   calc, count, base: inteiro

Inicio
   base <- 3

   Escreva("")
   Enquanto count <= 15 faca
      Se count = 0 entao
         calc <- 1
      Senao
         calc <- calc * base
         Escreval(base," ^",count," �:", calc)
      FimSe
      count <- count + 1
   FimEnquanto

Fimalgoritmo