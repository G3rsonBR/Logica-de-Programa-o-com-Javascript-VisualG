Algoritmo "Exercicio5J"
// Disciplina   : [Linguagem e L�gica de Programa��o com JS]
// Professor   : Jailson
// Descri��o   : Parte inteira da divis�o
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
   
   Escreva("A parte inteira da divis�o �: ", count)

Fimalgoritmo