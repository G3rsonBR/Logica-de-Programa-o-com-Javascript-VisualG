Algoritmo "Exercicio4G"
// Disciplina   : [Linguagem e Lógica de Programação em JS]
// Professor   : Jailson
// Descrição   : Divisiveis por 2 e 3
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 05/04/2024
Var
   num1, num2, num3, num4: real

Inicio
   Escreva("Digite o valor 1: ")
   Leia(num1)
   Escreva("Digite o valor 2: ")
   Leia(num2)
   Escreva("Digite o valor 3: ")
   Leia(num3)
   Escreva("Digite o valor 4: ")
   Leia(num4)
   
   Escreva("Os números divisiveis por 2 e 3 são:")
   Se (num1 % 2 = 0) E (num1 % 3 = 0) entao
      Escreva(num1)
   FimSe
   Se (num2 % 2 = 0) E (num2 % 3 = 0) entao
      Escreva(num1)
   FimSe
   Se (num3 % 2 = 0) E (num3 % 3 = 0) entao
      Escreva(num1)
   FimSe
   Se (num4 % 2 = 0) E (num4 % 3 = 0) entao
      Escreva(num1)
   FimSe

Fimalgoritmo