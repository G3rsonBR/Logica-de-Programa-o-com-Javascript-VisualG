Algoritmo "SomaEMultiplicaIdades"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Algoritmo que calcula soma da idade do homem mais velho com a mulher mais nome, e o produto do homem mais novo com a mulher mais velha
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 01/04/2024
Var
   homem1, homem2, mulher1, mulher2, maiorH, menorH, maiorM, menorM: inteiro
   soma, produto: real

Inicio
   Escreval("Digite a idade do Primeiro Homem: ")
   Leia(homem1)
   Escreval("Digite a idade do Segundo Homem: ")
   Leia(homem2)

   Escreval("Digite a idade da Primeira Mulher: ")
   Leia(mulher1)
   Escreval("Digite a idade da Segunda Mulher: ")
   Leia(mulher2)

   Se homem1 > homem2 entao
      maiorH <- homem1
      menorH <- homem2
   Senao
      maiorH <- homem2
      menorH <- homem1
   FimSe

   Se mulher1 > mulher2 entao
      maiorM <- mulher1
      menorM <- mulher2
   Senao
      maiorM <- mulher2
      menorM <- mulher1
   FimSe

   soma <- maiorH + menorM
   produto <- menorH * maiorM
   
   Escreval("Soma da maior idade de homem com a menor idade de mulher: ", soma)
   Escreval("Produto da menor idade de homem com a maior idade de mulher: ", produto)

Fimalgoritmo