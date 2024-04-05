Algoritmo "Exercicio4E"
// Disciplina   : [Linguagem e Lógica de Programação em JS]
// Professor   : Jailson
// Descrição   : Calculo das raizes de uma equação de segundo grau
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 05/04/2024
Var
   a, b, c, delta, x1, x2:real

Inicio
   Escreva("Digite o valor de A: ")
   Leia(a)
   Escreva("Digite o valor de B: ")
   Leia(b)
   Escreva("Digite o valor de C: ")
   Leia(c)

   delta <- (b^2) -4 * a * c

   Se a <> 0 entao
      Se delta <> 0 entao
         Se delta > 0 entao
            x1 <- (-b + raizq(delta)) / (2 * a)
            x2 <- (-b - raizq(delta)) / (2 * a)
            Escreval("Raiz 1: ", x1)
            Escreval("Raiz 2: ", x2)
         Senao
            Escreval("A Equação não possuí raizes reais")
         FimSe
      Senao
         x1 <- (-b + raizq(delta)) / (2 * a)
         Escreval("Ambas as raízes são: ", x1)
      FimSe
   Senao
     Escreva("A = 0, calculo não possível")
   FimSe

Fimalgoritmo