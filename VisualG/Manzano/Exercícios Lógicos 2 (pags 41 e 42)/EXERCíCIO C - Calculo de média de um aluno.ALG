Algoritmo "Exercicio4C"
// Disciplina   : [Linguagem e Lógica de Programação em JS]
// Professor   : Jailson
// Descrição   : Calculo de média de um aluno
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 05/04/2024
Var
   nota1, nota2, nota3, nota4, media:Real

Inicio
   Escreva("Digite a primeira nota: ")
   Leia(nota1)
   Escreva("Digite a segunda nota: ")
   Leia(nota2)
   Escreva("Digite a terceira nota: ")
   Leia(nota3)
   Escreva("Digite a quarta nota: ")
   Leia(nota4)

   media <- (nota1 + nota2 + nota3 + nota4) / 4

   Escreval("Média: ", media)
   Se media >= 5 entao
      Escreva("Aluno aprovado!")
   Senao
      Escreva("Aluno Não foi Aprovado")
   FimSe

Fimalgoritmo