Algoritmo "Verificação de Números"
// Disciplina   : [Linguagem e Lï¿½gica de Programação com Js]
// Professor   : Jailson
// Descrição   : Verifica as procedencias dos Números
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 26/03/2024
Var
   num1, num2: inteiro
   
Inicio
   Escreva("Digite o nome do Primeiro numero: ")
   Leia(num1)
   Escreva("Digite o nome do Segundo numero: ")
   Leia(num2)

   Se num1 > num2 entao
      Escreva("Primeiro Maior")
   Senao
      Se num2 > num1 entao
         Escreva("Segundo Maior")
      Senao
         Escreva("Numeros Iguais")
      FimSe
   FimSe

Fimalgoritmo