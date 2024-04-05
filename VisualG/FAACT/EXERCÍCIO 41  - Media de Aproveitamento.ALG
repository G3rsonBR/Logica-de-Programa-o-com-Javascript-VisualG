Algoritmo "MediaDeAproveitamento"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Algoritmo que calcula a média de aproveitamento de um aluno
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 03/04/2024
Var
   nota1, nota2, nota3, mediaExercicios, mediaFinal: real
   notaMedia: caractere

Inicio
   Escreva("Digite a Primeira Nota: ")
   Leia(nota1)
   Escreva("Digite a Segunda Nota: ")
   Leia(nota2)
   Escreva("Digite a Terceira Nota: ")
   Leia(nota3)
   Escreva("Digite a Media dos Exercícios: ")
   Leia(mediaExercicios)

   mediaFinal <- (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7

   Se mediaFinal >= 9.0 entao
      notaMedia <- "A"
   Senao
      Se (mediaFinal >= 7.5) E (mediaFinal < 9.0) entao
         notaMedia <- "B"
      Senao
         Se (mediaFinal >= 6.0) E (mediaFinal < 7.5) entao
            notaMedia <- "C"
         Senao
            notaMedia <- "D"
         FimSe
      FimSe
   FimSe

   Escreva("O Aproveitamento Final é: ", notaMedia)


Fimalgoritmo