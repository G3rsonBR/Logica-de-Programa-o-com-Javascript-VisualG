Algoritmo "Exercícios1G"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Elevar base 3 sem usar a exponenciação tradicional
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
Var
   count: inteiro
   calc, base: real

Inicio

   base <- 3
   para count de 0 ate 15 passo 1 faca
      Se count = 0 entao
         calc <- 1
      Senao
         calc <- calc * base
         Escreval(base," ^",count," é:", calc)
      FimSe
   FimPara

Fimalgoritmo