Algoritmo "Exercício5E"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Potencias de 3, do exponente 0 ao 15
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 05/04/2024
Var
   valor, count, elevado: inteiro

Inicio
   Escreva("Digite o Valor: ")
   Leia(valor)

   Escreva("")
   Enquanto count <= 15 faca
      elevado <- elevado * valor
      Se count = 0 entao
         elevado <- 1
      FimSe
      Se (count = 0) ou (count % 3 = 0) entao
         Escreval(valor, " elevado a", count, ":", elevado)
      FimSe
      count<- count + 1
   FimEnquanto

Fimalgoritmo