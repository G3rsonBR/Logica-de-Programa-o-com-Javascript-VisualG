Algoritmo "Exercicio5K"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Calcula a área de comodos de uma residencia
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
// Recado      : Eu fiz por conta própria a criação dos Vetores e tudo, não foi ensinado em aula esse tipo de manipulação
Var
   count: inteiro
   area, largura, comprimento, totalArea: real
   vaiContinuar: caractere

   comodos: vetor[1..10] de caractere
   areas: vetor[1..10] de real

Inicio
   vaiContinuar <- "s"
   count <- 1

   Escreval("Bem vindo a sua calculadora de cômodos!")

   Enquanto vaiContinuar = "s" faca

      Escreva("Qual o nome do Cômodo: ")
      Leia(comodos[count])

      Escreva("Qual o comprimento do(a) ", comodos[count],": ")
      Leia(comprimento)
      Escreva("Qual a largura do(a) ", comodos[count],": ")
      Leia(largura)

      area <- largura * comprimento
      areas[count] <- area
      totalArea <- totalArea + area

      Escreval("")
      Escreva("Área do comodo ", comodos[count],": ", areas[count])

      count <- count + 1

      Escreval("")
      Escreva("Deseja adicionar outro comodo? (s/n): ")
      Leia(vaiContinuar)

      Se vaiContinuar = "s" entao
         LimpaTela
         Escreval("Adicinar outro comodo: ")
      FimSe
   FimEnquanto

   limpaTela
   
   count <- 1
   Enquanto count <= 10 faca
      Se (comodos[count] <> "") E (areas[count] > 0) entao
         Escreva("Comodo ", comodos[count], " tem ", areas[count], " de área")
         Escreval("")
      FimSe
      count <- count + 1
   FimEnquanto

   Escreval("")
   Escreval("Area total da Casa: ", totalArea)

Fimalgoritmo