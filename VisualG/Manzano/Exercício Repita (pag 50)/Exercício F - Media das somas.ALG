Algoritmo "Exerc�cio1F"
// Disciplina   : [Linguagem e L�gica de Programa��o com JS]
// Professor   : Jailson
// Descri��o   : Media das somas das entradas do usu�rio
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
Var
   count, valor, somatorio, media: real

Inicio

   count <- 1
   Escreval("Voc� poder� digitar quantos valores quiser")
   Escreval("mas se for negativo, o progama acaba.")
   Repita
      EscrevaL("")
      Escreva("Digite o ", count, "� valor: ")
      Leia(valor)

      somatorio <- somatorio + valor
      Se valor < 0 entao
         Escreval("Valor digitado � negativo. Encerrando o programa.")
      Senao
         count <- count + 1
      FimSe
   At� valor < 0

   Se valor < 0 entao
      media <- somatorio / count
   FimSe
   
   EscrevaL("")
   Escreval("Soma de todos os valores: ", somatorio)
   Escreval("Media da somat�ria: ", media)
   Escreval("Quantidade de elementos: ", count)


Fimalgoritmo