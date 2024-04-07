Algoritmo "Exercício1F"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Media das somas das entradas do usuário
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
Var
   count, valor, somatorio, media: real

Inicio

   count <- 1
   Escreval("Você poderá digitar quantos valores quiser")
   Escreval("mas se for negativo, o progama acaba.")
   Repita
      EscrevaL("")
      Escreva("Digite o ", count, "° valor: ")
      Leia(valor)

      somatorio <- somatorio + valor
      Se valor < 0 entao
         Escreval("Valor digitado é negativo. Encerrando o programa.")
      Senao
         count <- count + 1
      FimSe
   Até valor < 0

   Se valor < 0 entao
      media <- somatorio / count
   FimSe
   
   EscrevaL("")
   Escreval("Soma de todos os valores: ", somatorio)
   Escreval("Media da somatória: ", media)
   Escreval("Quantidade de elementos: ", count)


Fimalgoritmo