Algoritmo "Time Vencedor"
// Disciplina   : [Linguagem e Lï¿½gica de Programação com Js]
// Professor   : Jailson
// Descrição   : Verifica o Time Vencedor e se empatou
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 26/03/2024
Var
   golsSquad1, golsSquad2: inteiro
   squad1, squad2: caracter
Inicio
   Escreva("Digite o nome do Primeiro Time: ")
   Leia(squad1)
   Escreva("Digite a quantidade de gols dele: ")
   Leia(golsSquad1)

   Escreva("Digite o nome do Segundo Time: ")
   Leia(squad2)
   Escreva("Digite a quantidade de gols dele: ")
   Leia(golsSquad2)


   Se golsSquad1 > golsSquad2 entao
      Escreval("Time Vencedor: ", squad1)
      Escreval("Gols a mais: ", golsSquad1 - golsSquad2)
   Senao
      Se golsSquad2 > golsSquad1 entao
         Escreval("Time Vencedor: ", squad2)
         Escreval("Gols a mais: ", golsSquad2 - golsSquad1)
      Senao
         Escreva("EMPATE!!!")
      FimSe
   FimSe
Fimalgoritmo