Algoritmo "Presta��o Atrasada"
// Disciplina   : [Linguagem e L�gica de Programa��o em JS]
// Professor   : Jailson
// Descri��o   : Reajuste de pre�o a uma presta��o em atraso
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 21/03/2024

Var
valor, taxa, temp, prestacao: real

Inicio
Escreva("Qual � o valor da presta��o atrasada: ")
Leia(valor)
Escreva("Qual � a taxa aplicada na presta��o atrasada: ")
Leia(taxa)
Escreva("Digite a quantos dias ela est� em atraso: ")
Leia(temp)

prestacao <- valor + (valor * taxa/100) * temp
Escreva("O valor da presta��o ser�: ", prestacao)

Fimalgoritmo