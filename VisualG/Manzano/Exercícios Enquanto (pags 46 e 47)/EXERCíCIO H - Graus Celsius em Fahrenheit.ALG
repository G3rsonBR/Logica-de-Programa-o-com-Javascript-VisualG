Algoritmo "Exercicio5H"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Graus Celsius em Fahrenheit, de 10 em 10°C
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
Var
   gCelsius, gFahren, count: real

Inicio

   gCelsius <- 10
   Enquanto count < 10 faca
      gFahren <- (9 * gCelsius + 160) / 5
      Escreval(gCelsius, "° em Fahrenheit:", gFahren)

      gCelsius <- gCelsius + 10
      count <- count + 1
   FimEnquanto

Fimalgoritmo