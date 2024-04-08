// Exercício 11 - FACCAT
// EPS -> Entrada, Processamento, Saída

let salarioFixo = parseInt(prompt("Digite seu salário fixo: "))
let comissaoPorCarro = parseInt(prompt("Digite quanto é dado de comissão por venda de carro: "))
let carrosVendidos = parseInt(prompt("Digite quantos carros você vendeu: "))
let comissaoFinal = carrosVendidos * comissaoPorCarro

carrosVendidos += comissaoFinal + (comissaoFinal * 0.05) 
let salarioFinal = salarioFixo + carrosVendidos

alert(`Seu salário final é: ${salarioFinal}`)