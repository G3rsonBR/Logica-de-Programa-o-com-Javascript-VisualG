Algoritmo "Reajuste Salarial"
// Disciplina   : [Linguagem e L�gica de Programa��o com JS]
// Professor   : Jailson
// Descri��o   : Reajuste de salario
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 18/03/2024
Var
salario, porcentagem, reajuste:real

Inicio
Escreva("Digite seu salario atual: ")
Leia(salario)
Escreva("Digite a porcentagem para reajuste (use 0.x): ")
Leia(porcentagem)
reajuste <- salario * (porcentagem + 1)
Escreva("Novo sal�rio: ", reajuste)


Fimalgoritmo