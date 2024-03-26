Algoritmo "Soma dos 2 maiores"
// Disciplina   : [Linguagem e Lï¿½gica de Programação com Js]
// Professor   : Jailson
// Descrição   : Verifica qual os dois maiores números e soma eles
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 26/03/2024
Var
   num1, num2, num3, soma:inteiro

Inicio
   Escreva("Digite o primeiro número: ")
   Leia(num1)
   Escreva("Digite o segundo número: ")
   Leia(num2)
   Escreva("Digite o terceiro número: ")
   Leia(num3)

   Se num1 > num2 entao
      Se num2 > num3 entao
         soma <- num1 + num2
         Escreva("A soma dos maiores é: ", soma)
      Senao
         soma <- num1 + num3
         Escreva("A soma dos maiores é: ", soma)
      FimSe
      
   Senao
      Se num1 > num3 entao
         soma <- num2 + num1
         Escreva("A soma dos maiores é: ", soma)
      Senao
         soma <- num2 + num3
         Escreva("A soma dos maiores é: ", soma)
      FimSe
   FimSe

Fimalgoritmo