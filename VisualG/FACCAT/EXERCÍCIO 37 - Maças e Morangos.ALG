Algoritmo "MaçasEMorangos"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Algoritmo que calcula desconto pela quantidade de morangos e maças compradas
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 01/04/2024
Var
   macas, morangos, totalMacas, totalMorangos, compra, kgFinal: real


Inicio
   Escreval("Digite a quantidade de maças (Em KG): ")
   Leia(macas)
   Escreval("Digite a quantidade de morangos (Em KG): ")
   Leia(morangos)
   
   kgFinal <- morangos + macas
   
   Se morangos > 5 entao
      totalMorangos <- morangos * 2.2
   Senao
      totalMorangos <- morangos * 2.5
   FimSe

   Se macas > 5 entao
      totalMacas <- macas * 1.5
   Senao
      totalMacas <- macas * 1.8
   FimSe

   compra <- totalMacas + totalMorangos
   Se (kgFinal > 8) OU (compra > 25) entao
      compra <- compra - (compra * 0.10)
   FimSe
   
   Escreva("Preço final: ", compra)

Fimalgoritmo