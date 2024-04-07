Algoritmo "Pode Votar"
// Disciplina   : [Linguagem e Lógica de Programação em JS]
// Professor   : Jailson
// Descrição   : Mostrar se o usuário pode votar esse ano
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
      Escreva("Poderá votar!")
   Senao
      Escreva("Não poderá votar!")
   Fimse

Fimalgoritmo