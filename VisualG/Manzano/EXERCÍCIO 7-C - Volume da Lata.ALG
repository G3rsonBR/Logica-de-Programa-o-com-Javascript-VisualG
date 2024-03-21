Algoritmo "Volume da Lata"
// Disciplina   : [Linguagem e Lógica de Programação em JS]
// Professor   : Jailson
// Descrição   : Volume da lata
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 21/03/2024
Var
raio, altura, pii, vol: real

Inicio
Escreva("Digite a altura da Lata de Óleo (em cm): ")
Leia(altura)
Escreva("Digite o raio da Lata de Óleo: ")
Leia(raio)

pii <- 3.14
vol <- pii * (raio ^ 2) * altura
Escreva("O Volume é: ", vol)

Fimalgoritmo