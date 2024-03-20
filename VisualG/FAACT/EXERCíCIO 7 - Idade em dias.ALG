Algoritmo "Idade em dias"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Idade em Dias
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 18/03/2024
Var
anos, meses, dias:inteiro

Inicio
Escreval("Digite sua idade atual: ")
Leia(anos)
Escreva("Digite quantos Meses passou desde seu último aniversário: ")
Leia(meses)
Escreva("Digite quantos Dias passou desde seu último mês-aniversário: ")
Leia(dias)
Escreva("Sua idade em dias é: ", (anos * 365) + (meses * 30) + dias)

Fimalgoritmo