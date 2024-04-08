const exercises = [];
const addTextoBtn = [
  "Exercício 1 - Somar",
  "Exercício 2 - Subtrair",
  "Exercício 3 - Multiplicar",
  "Exercício 4 - Dividir",
  "Exercício 5 - Antecessor",
  "Exercício 6 - Area de um Retângulo",
  "Exercício 7 - Idade em Dias",
  "Exercício 8 - Votos",
  "Exercício 9 - Reajuste de Salário",
  "Exercício 10 - Area do Quadrado",
  "Exercício 11 - Comissão de Venda de Carros",
  "Exercício 12 - Celsius para Fahrenheit",
  "Exercício 13 - Media de Notas",
];

// Se uma função existir, adicione ela ao array
for (var i = 1; i <= addTextoBtn.length; i++) {
  var functionName = "exercise" + i;

  if (typeof window[functionName] === "function") {
    exercises.push({
      exercise: i,
      texto: addTextoBtn[i - 1],
    });
    console.log("A função " + functionName + " existe.");
  }
}

exercises.forEach((e) => {
  let mainContent = document.querySelector(".exercises-box");
  let btn = document.createElement("button");

  btn.innerHTML = e.texto;
  btn.setAttribute("onclick", `exercise${e.exercise}()`);
  btn.setAttribute("class", `btn`);
  mainContent.appendChild(btn);
});

/* Exercícios em Funções! */
function exercise1() {
  // Exercício consiste em SOMAR dois valores digitados pelo usuário
  alert(`Você escolheu o ${addTextoBtn[0]}! Clique para continuar.`)

  var numero1 = parseInt(prompt("Digite um número: "));
  var numero2 = parseInt(prompt("Digite outro número: "));
  var soma = numero1 + numero2;

  alert("A soma dos números informados é igual: " + soma);
}

function exercise2() {
  alert(`Você escolheu o ${addTextoBtn[1]}! Clique para continuar.`)

  var numero1 = parseInt(prompt("Digite um valor: "));
  var numero2 = parseInt(prompt("Digite outro valor: "));
  var sub = numero1 - numero2;

  alert("A subtração dos números informados é igual: " + sub);
}

function exercise3() {
  alert(`Você escolheu o ${addTextoBtn[2]}! Clique para continuar.`)

  var numero1 = parseInt(prompt("Digite um valor: "));
  var numero2 = parseInt(prompt("Digite Outro valor: "));
  var mult = numero1 * numero2;

  alert("A multiplicação dos números informados é igual: " + mult);
}

function exercise4() {
  alert(`Você escolheu o ${addTextoBtn[3]}! Clique para continuar.`)

  var number1 = parseInt(prompt("Digite um valor: "))
  var number2 = parseInt(prompt("Digite outro valor: "))

  var div = number1 / number2
  alert("A divisão dos números informados é igual: " + div)
}

function exercise5() {
  alert(`Você escolheu o ${addTextoBtn[4]}! Clique para continuar.`)

  var number = parseInt(prompt("Digite um número: "))
  var antecessor = number - 1

  alert(`O Antecessor do número digitado é: ${antecessor}`)
}

function exercise6() {
  alert(`Você escolheu o ${addTextoBtn[5]}! Clique para continuar.`)

  var number1 = parseInt(prompt("Digite a base do retângulo: "))
  var number2 = parseInt(prompt("Digite a altura do retângulo: "))
  var area = number1 * number2

  alert(`A Área do retângulo é: ${area}`)
}

function exercise7() {
  alert(`Você escolheu o ${addTextoBtn[6]}! Clique para continuar.`)

  let number1 = parseInt(prompt("Digite quantos anos você tem: "))
  let number2 = parseInt(prompt("Digite quantos meses se passaram desde seu última aniversário: "))
  let number3 = parseInt(prompt("Digite quantos dias se passaram em relação ao mês que você nasceu: "))
  let age = number1 * 365 + number2 * 30 + number3

  alert(`Sua idade em dias é: ${age}`)
}

function exercise8() {
  alert(`Você escolheu o ${addTextoBtn[7]}! Clique para continuar.`)

  let votosTotal = parseInt(prompt("Digite a quantidade de votos totais: "))
  let votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos: "))
  let votosNull = parseInt(prompt("Digite a quantidade de votos nulos: "))
  let votosValidos = parseInt(prompt("Digite a quantidade de votos validos: "))

  let votosBrancosPercent = (votosBrancos * 100) / votosTotal
  let votosNullPercent = (votosNull * 100) / votosTotal
  let votosValidosPercent = (votosValidos * 100) / votosTotal

  alert(`O total de votos é: ${votosTotal}\n
A porcentagem de votos brancos é: ${votosBrancosPercent}%\n
A porcentagem de votos nulos é: ${votosNullPercent}%\n
A porcentagem de votos validos é: ${votosValidosPercent}%
`)
}

function exercise9() {
  alert(`Você escolheu o ${addTextoBtn[8]}! Clique para continuar.`)

  let salario = parseInt(prompt("Digite seu salário atual: "))
  let percentReajuste = parseInt(prompt("Digite a porcentagem do reajuste: "))

  let reajuste = (salario * (1 + percentReajuste / 100))
  alert(`Seu salário reajustado é: ${reajuste}`)
}

function exercise10() {
  alert(`Você escolheu o ${addTextoBtn[9]}! Clique para continuar.`)

  let custo = parseInt(prompt("Digite o custo de fábrica do carro: "))
  let valorFinal = custo * (28 / 100) + custo * (45 / 100) + custo

  alert(`O valor final com os impostos é: ${valorFinal}`)
}

function exercise11() {
  alert(`Você escolheu o ${addTextoBtn[10]}! Clique para continuar.`)

  let salarioFixo = parseInt(prompt("Digite seu salário fixo: "))
  let comissaoPorCarro = parseInt(prompt("Digite quanto é dado de comissão por venda de carro: "))
  let carrosVendidos = parseInt(prompt("Digite quantos carros você vendeu: "))
  let comissaoFinal = carrosVendidos * comissaoPorCarro

  carrosVendidos += comissaoFinal + (comissaoFinal * 0.05)
  let salarioFinal = salarioFixo + carrosVendidos

  alert(`Seu salário final é: ${salarioFinal}`)
}

function exercise12() {
  alert(`Você escolheu o ${addTextoBtn[11]}! Clique para continuar.`)

  let gCelsius = parseInt(prompt("Digite a temperatura em Celsius: "))
  let gFahren = gCelsius * (9 / 5) + 32

  alert(`A temperatura em Fahrenheit é: ${gFahren}`)
}

function exercise13() {
  alert(`Você escolheu o ${addTextoBtn[12]}! Clique para continuar.`)

  let nota1 = parseInt(prompt("Digite a primeira nota: "))
  let nota2 = parseInt(prompt("Digite a segunda nota: "))
  let nota3 = parseInt(prompt("Digite a terceira nota: "))
  let mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10

  alert(`A media ponderada é: ${mediaFinal}`)
}