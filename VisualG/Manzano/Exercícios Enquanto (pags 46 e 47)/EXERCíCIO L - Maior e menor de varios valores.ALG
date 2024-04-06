Algoritmo "Exercicio5L"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Maior e menor entre as entradas
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
Var
   menor, maior, valor, count: inteiro
   continuar: caractere

Inicio

   continuar <- "s"
   Escreval("Você pode digitar quantos valores quiser.")
   Escreval("Mas valores negativos encerram!")
   Escreval("")
   Enquanto continuar = "s" faca
      Escreva("Digite o valor: ")
      Leia(valor)

      Se count = 0 entao
         maior <- valor
         menor <- valor
      Senao
         Se valor < 0 entao
            Escreval("Valor negativo! O programa irá encerrar")
            continuar <- "n"
         Senao
            Se valor > maior entao
               maior <- valor
            FimSe
            Se valor < menor entao
               menor <- valor
            FimSe
         FimSe
      FimSe

      Escreval("")
      count <- count + 1
   FimEnquanto

   Escreval("O menor valor foi: ", menor)
   Escreval("O menor valor foi: ", maior)
   Escreval("Ultimo valor digitado: ", valor)

Fimalgoritmo