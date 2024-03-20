Algoritmo "Valor de Veiculo"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Comprar um carro
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 18/03/2024
Var
custo, calc:real

Inicio
Escreva("Digite o valor de fabrica do veículo: ")
Leia(custo)

calc <- custo * (28/100) + custo * (45/100)

Escreva("O valor final (impostos + valor do distribuidor) é: ", calc + custo )

Fimalgoritmo