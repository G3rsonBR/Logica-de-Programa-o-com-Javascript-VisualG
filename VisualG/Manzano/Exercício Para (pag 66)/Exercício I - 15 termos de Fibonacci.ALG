Algoritmo "Exercícios1I"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : 15 termos de Fibonacci
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
Var
   n1, n2, nth: real
   count: inteiro
Inicio
   para count de 0 ate 15 passo 1 faca
      Se count = 0 entao
         n1 <- 1
         n2 <- 1
      Senao
         nth <- n1 + n2
         n1 <- n2
         n2 <- nth
      FimSe

      Escreval(count,"° termo de Fibonacci: ", nth)
   FimPara

Fimalgoritmo