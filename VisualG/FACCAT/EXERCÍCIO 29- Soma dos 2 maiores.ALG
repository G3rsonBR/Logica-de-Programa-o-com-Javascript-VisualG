Algoritmo "Soma dos 2 maiores"
// Disciplina   : [Linguagem e L�gica de Programa��o com Js]
// Professor   : Jailson
// Descri��o   : Verifica qual os dois maiores n�meros e soma eles
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 26/03/2024
Var
   num1, num2, num3, soma:inteiro

Inicio
   Escreva("Digite o primeiro n�mero: ")
   Leia(num1)
   Escreva("Digite o segundo n�mero: ")
   Leia(num2)
   Escreva("Digite o terceiro n�mero: ")
   Leia(num3)

   Se num1 > num2 entao
      Se num2 > num3 entao
         soma <- num1 + num2
         Escreva("A soma dos maiores �: ", soma)
      Senao
         soma <- num1 + num3
         Escreva("A soma dos maiores �: ", soma)
      FimSe
      
   Senao
      Se num1 > num3 entao
         soma <- num2 + num1
         Escreva("A soma dos maiores �: ", soma)
      Senao
         soma <- num2 + num3
         Escreva("A soma dos maiores �: ", soma)
      FimSe
   FimSe

Fimalgoritmo