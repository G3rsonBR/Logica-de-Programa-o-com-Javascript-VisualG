Algoritmo "Dia da semana"
// Disciplina   : [Linguagem e L�gica de Programa��o com JS]
// Professor   : Jailson
// Descri��o   : Diz o dia da semana se acordo com o valor digitado
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 27/03/2024
Var
   dia:inteiro

Inicio
   Escreva("Digite um n�mero: ")
   Leia(dia)

   Se dia = 1 entao
      Escreva("Domingo")
   Senao
      Se dia = 2 entao
         Escreva("Segunda")
      Senao
         Se dia = 3 entao
            Escreva("Ter�a")
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
                        Escreva("N�o h� dias da semana correspondentes a esse n�mero")
                     FimSe
                  FimSe
               FimSe
            FimSe
         FimSe
      FimSe
   FimSe

Fimalgoritmo