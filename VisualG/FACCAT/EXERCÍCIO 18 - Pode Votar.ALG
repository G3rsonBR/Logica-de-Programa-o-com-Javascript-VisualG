Algoritmo "Pode Votar"
// Disciplina   : [Linguagem e L�gica de Programa��o em JS]
// Professor   : Jailson
// Descri��o   : Mostrar se o usu�rio pode votar esse ano
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 21/03/2024
Var
   anoNascimento, anoAtual:inteiro

Inicio
   Escreva("Digite o ano atual: ")
   Leia(anoAtual)
   Escreva("Digite o ano de seu nascimento: ")
   Leia(anoNascimento)

   Se (anoAtual - anoNascimento >= 16) entao
      Escreva("Poder� votar!")
   Senao
      Escreva("N�o poder� votar!")
   Fimse

Fimalgoritmo