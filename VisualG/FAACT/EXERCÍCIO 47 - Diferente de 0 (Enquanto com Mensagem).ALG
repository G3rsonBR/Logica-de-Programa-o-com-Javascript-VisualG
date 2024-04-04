Algoritmo "Diferente de 0 (Enquanto com Mensagem)"
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

   Enquanto num2 = 0 faca
      Escreva("Digite o Segundo valor: ")
      Leia(num2)
      Se(num2 = 0) entao
         Escreval("VALOR INVALIDO")
      FimSe
   FimEnquanto

   Escreval("")
   Escreva(num1, num2)

Fimalgoritmo