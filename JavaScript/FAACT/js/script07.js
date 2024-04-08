// Exercício 7 - FACCAT
// EPS -> Entrada, Processamento, Saída

let number1 = parseInt(prompt("Digite quantos anos você tem: "))
let number2 = parseInt(prompt("Digite quantos meses se passaram desde seu última aniversário: "))
let number3 = parseInt(prompt("Digite quantos dias se passaram em relação ao mês que você nasceu: "))
let age = number1 * 365 + number2 * 30 + number3

alert(`Sua idade em dias é: ${age}`)