Algoritmo "Prestação Atrasada"
// Disciplina   : [Linguagem e Lógica de Programação em JS]
// Professor   : Jailson
// Descrição   : Reajuste de preço a uma prestação em atraso
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 21/03/2024

Var
valor, taxa, temp, prestacao: real

Inicio
Escreva("Qual é o valor da prestação atrasada: ")
Leia(valor)
Escreva("Qual é a taxa aplicada na prestação atrasada: ")
Leia(taxa)
Escreva("Digite a quantos dias ela está em atraso: ")
Leia(temp)

prestacao <- valor + (valor * taxa/100) * temp
Escreva("O valor da prestação será: ", prestacao)

Fimalgoritmo