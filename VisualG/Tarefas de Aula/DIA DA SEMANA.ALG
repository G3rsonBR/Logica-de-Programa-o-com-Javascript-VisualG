Algoritmo "Dia da semana"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Diz o dia da semana se acordo com o valor digitado
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 27/03/2024
Var
   dia:inteiro

Inicio
   Escreva("Digite um número: ")
   Leia(dia)

   Se dia = 1 entao
      Escreva("Domingo")
   Senao
      Se dia = 2 entao
         Escreva("Segunda")
      Senao
         Se dia = 3 entao
            Escreva("Terça")
         Senao
            Se dia = 4 entao
               Escreva("Quarta")
            Senao
               Se dia = 5 entao
                  Escreva("Quinta")
               Senao
                  Se dia = 6 entao
                     Escreva("Sexta")
                  Senao
                     Se dia = 7 entao
                        Escreva("Sabado")
                     Senao
                        Escreva("Não há dias da semana correspondentes a esse número")
                     FimSe
                  FimSe
               FimSe
            FimSe
         FimSe
      FimSe
   FimSe

Fimalgoritmo