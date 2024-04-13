Algoritmo "ExercicioBRepita"
// Disciplina   : [Linguagem e L�gica de Programa��o com JS]
// Professor   : Jailson
// Descri��o   : Elaborar um programa que apresente no final o somat�rio dos valores pares existentes na faixa de 1 at� 500.
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 03/04/2024
Var
   contadora, somados: inteiro

Inicio
   contadora <- 1
   Repita
      Se contadora MOD 2 = 0 entao
         somados <- somados + contadora
      FimSe
      contadora <- contadora + 1
   Ate contadora > 500

   Escreval("O valor da soma dos pares de 1 a 500 �: ", somados)

Fimalgoritmo