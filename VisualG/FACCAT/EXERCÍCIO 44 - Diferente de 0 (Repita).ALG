Algoritmo "Diferente de 0"
// Disciplina   : [Linguagem e L�gica de Programa�� com JS]
// Professor   : Jailson
// Descri��o   : Lopping que n�o permite o segundo valor ser = 0
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 04/04/2024
Var
   num1, num2: inteiro
Inicio

   Escreva("Digite o Primeiro valor: ")
   Leia(num1)

   repita
      Escreval("")
      Escreval("Aviso: o segundo valor nao pode ser 0...")
      Escreva("Digite o Segundo valor: ")
      Leia(num2)
   ate num2 <> 0

   Escreva(num1, num2)

Fimalgoritmo