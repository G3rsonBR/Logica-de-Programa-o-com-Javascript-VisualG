Algoritmo "Percentual de Votos"
// Disciplina   : [Lógica de Programação com Javascript]
// Professor   : Jailson
// Descrição   : Percentual de Votos.
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 20/03/2024
Var

votosTotais, votosBrancos, votosNulos, votosValidos:inteiro

brancosPercent, nulosPercent, validosPercent:real

Inicio

Escreva("Digite o total de votos:")
Leia(votosTotais)
Escreva("Digite o total de votos em brancos: ")
Leia(votosBrancos)
Escreva("Digite o total de votos nulos: ")
Leia(votosNulos)
Escreva("Digite os total de votos validos: ")
Leia(votosValidos)

brancosPercent <- (votosBrancos / votosTotais) * 100
nulosPercent <- (votosNulos / votosTotais) * 100
validosPercent <-(votosValidos / votosTotais)* 100

Escreval("")
Escreval("Votos Totais: ", votosTotais)
Escreval("Votos em Branco (%): ", brancosPercent)
Escreval("Votos Nulos (%): ", nulosPercent)
Escreval("Votos Válidos (%): ", validosPercent)



Fimalgoritmo