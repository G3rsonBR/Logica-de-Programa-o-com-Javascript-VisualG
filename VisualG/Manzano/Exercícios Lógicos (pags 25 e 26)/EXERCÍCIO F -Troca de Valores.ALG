Algoritmo "Troca de Valores"
// Disciplina   : [Linguagem e L�gica de Programa��o em JS]
// Professor   : Jailson
// Descri��o   : Troca de valores
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 21/03/2024

Var
a, b, aux: real

Inicio
Escreva("Digite o primeiro valor: ")
Leia(a)
Escreva("Digite o segundo valor: ")
Leia(b)

aux <- b
b <- a
a <- aux

Escreva("Os valores trocados, s�o respetivamente: ", a, b)


Fimalgoritmo