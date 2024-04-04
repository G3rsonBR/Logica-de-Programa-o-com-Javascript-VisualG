Algoritmo "Diferente de 0 (Repita com mensagem)"
// Disciplina   : [Linguagem e Lógica de Programaçã com JS]
// Professor   : Jailson
// Descrição   : Lopping que não permite o segundo valor ser = 0
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 04/04/2024
Var
   num1, num2: inteiro
Inicio

   Escreva("Digite o Primeiro valor: ")
   Leia(num1)

   repita
      Escreva("Digite o Segundo valor: ")
      Leia(num2)
      Se(num2 = 0) entao
         Escreval("VALOR INVALIDO")
      FimSe
   ate num2 <> 0

   Escreva(num1, num2)

Fimalgoritmo