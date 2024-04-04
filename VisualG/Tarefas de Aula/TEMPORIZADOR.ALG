Algoritmo "Temporizador"
// Disciplina   : [Linguagem e Lógica de Programaçã com JS]
// Professor   : Jailson
// Descrição   : Temporazador
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 04/04/2024
Var
   seg, min:inteiro

Inicio
   Escreva("Digite os minutos de parametro: ")
   Leia(min)
   Escreva("Digite os minutos de parametro: ")
   Leia(seg)

   Se seg > 59 entao
      min <- min + (seg \ 60)
      seg <- seg % 60
   FimSe

   timer(333)
   para min de min ate 0 passo -1 faca
      para seg de seg ate 0 passo -1 faca
         limpaTela
         Escreval(min,":",seg)
      FimPara
      seg <- 59
   FimPara

Fimalgoritmo