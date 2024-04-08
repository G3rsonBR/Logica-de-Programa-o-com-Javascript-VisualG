// Exercício 8 - FACCAT
// EPS -> Entrada, Processamento, Saída

let votosTotal = parseInt(prompt("Digite a quantidade de votos totais: "))
let votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos: "))
let votosNull = parseInt(prompt("Digite a quantidade de votos nulos: "))
let votosValidos = parseInt(prompt("Digite a quantidade de votos validos: "))

let votosBrancosPercent = (votosBrancos * 100) / votosTotal
let votosNullPercent = (votosNull * 100) / votosTotal
let votosValidosPercent = (votosValidos * 100) / votosTotal

alert(`O total de votos é:: ${votosTotal}\n
A porcentagem de votos brancos é: ${votosBrancosPercent}%\n
A porcentagem de votos nulos é: ${votosNullPercent}%\n
A porcentagem de votos validos é: ${votosValidosPercent}%
`)