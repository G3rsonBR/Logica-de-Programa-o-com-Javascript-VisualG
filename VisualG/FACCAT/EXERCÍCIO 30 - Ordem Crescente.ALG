Algoritmo "Ordem Crescente"
// Disciplina   : [Linguagem e L�gica de Programa��o com Js]
// Professor   : Jailson
// Descri��o   : Ordena os n�meros em Ordem Crescente
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 26/03/2024
Var
   num1, num2, num3:inteiro

Inicio
   Escreva("Digite o primeiro n�mero: ")
   Leia(num1)
   Escreva("Digite o segundo n�mero: ")
   Leia(num2)
   Escreva("Digite o terceiro n�mero: ")
   Leia(num3)

   Se num1 < num2 entao
      Se num1 < num3 entao
         Se num2 < num3 entao
            Escreva("Em ordem crescente: ", num1, num2, num3)
         Senao
            Escreva("Em ordem crescente: ", num1, num3, num2)
         FimSe
      Senao
         Escreva("Em ordem crescente: ", num3, num1, num2)
      FimSe
      
      
   Senao
      Se num1 < num3 entao
         Escreva("Em ordem crescente: ", num2, num1, num3)
      Senao
         Escreva("Em ordem crescente: ", num3, num2, num1)
      FimSe
   FimSe
Fimalgoritmo