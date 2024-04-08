// Exercício 9 - FACCAT
// EPS -> Entrada, Processamento, Saída

let salario = parseInt(prompt("Digite seu salário atual: "))
let percentReajuste = parseInt(prompt("Digite a porcentagem do reajuste: "))

let reajuste = (salario * (1 + percentReajuste / 100))
alert(`Seu salário reajustado é: ${reajuste}`)