Algoritmo "Exercicio5J"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Parte inteira da divisão
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
Var
   divisor, dividendo, count: inteiro
   continuar: caractere

Inicio

   Escreva("Digite o dividendo: ")
   Leia(dividendo)
   Escreva("Digite o divisor: ")
   Leia(divisor)

   Repita
      Se dividendo >= divisor entao
         dividendo <- dividendo - divisor
         count <- count + 1
      Senao
         continuar <- "n"
      FimSe
   Ate continuar = "n"
   
   Escreva("A parte inteira da divisão é: ", count)

Fimalgoritmo