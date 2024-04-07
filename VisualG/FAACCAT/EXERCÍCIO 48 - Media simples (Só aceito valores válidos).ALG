Algoritmo "Media simples (Só aceito valores válidos)"
// Disciplina   : [Linguagem e Lógica de Programaçã com JS]
// Professor   : Jailson
// Descrição   : Media simples (Só aceito valores válidos)
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 04/04/2024
Var
   nota1, nota2: inteiro
   media:real
Inicio
   nota1 <- -1
   Enquanto (nota1 < 0) ou (nota1 > 10)  faca
      Escreva("Digite a nota da Avaliacao 1: ")
      Leia(nota1)
      Se(nota1 = 0) entao
         Escreval("VALOR INVALIDO")
      FimSe
   FimEnquanto

   repita
      Escreva("Digite a nota da Avaliacao 2: ")
      Leia(nota2)
      Se(nota2 = 0) entao
         Escreval("VALOR INVALIDO")
      FimSe
   ate (nota2 >= 0) e (nota2 <= 10)


   media <- (nota1 + nota2) / 2
   Escreva("Media do aluno: ", media)
Fimalgoritmo