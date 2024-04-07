Algoritmo "Exercícios1D"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Pares de 1 a 500
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
Var
   count, somados: inteiro

Inicio
   para count de 1 ate 500 passo 1 faca
        Se count % 2 = 0 entao
           somados <- somados + count
        FimSe
   FimPara

   Escreva("O Somatório dos pares de 1 a 500: ", somados)

Fimalgoritmo