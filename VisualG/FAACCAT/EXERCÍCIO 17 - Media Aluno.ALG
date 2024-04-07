Algoritmo "Media Aluno"
// Disciplina   : [Linguagem e Lógica de Programação em JS]
// Professor   : Jailson
// Descrição   : Calculo de média simples
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 21/03/2024
Var
   nota1, nota2, media: real

Inicio
   Escreva("Digite a nota da primeira avaliação do aluno: ")
   Leia(nota1)
   Escreva("Digite a nota da segunda avaliação do aluno: ")
   Leia(nota2)
   
   media <- (nota1 + nota2) / 2
   Escreval("A média é: ", media)

   Se (media >= 6) entao
      Escreval("Aluno aprovado!")
   Senao
      Escreval("Aluno reprovado!")
   Fimse

Fimalgoritmo