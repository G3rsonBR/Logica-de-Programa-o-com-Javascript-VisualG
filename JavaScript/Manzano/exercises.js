import addTextoBtn from './main.js'
addTextoBtn.forEach(e => console.log(e))

let numExercises = 16;

for (let i = 1; i <= numExercises; i++) {
  window[`exercise${i}`] = eval(`exercise${i}`);
}

// Exercicios da página 25 e 26
function exercise1() {
  alert(`Você escolheu o ${addTextoBtn[0]}! Clique para continuar.`);

  let grausC = parseFloat(prompt('Digite a temperatura em Celsius: '));
  let conversao = (9 * grausC + 160) / 5;

  alert("Em Fahrenheit fica: " + conversao);
}

function exercise2() {
  alert(`Você escolheu o ${addTextoBtn[1]}! Clique para continuar.`);

  let grausF = parseFloat(prompt('Digite a temperatura em Fahrenheit: '));
  let conversao = (grausF - 32) / 1.8;

  alert("Em Celsius fica: " + conversao);
}

function exercise3() {
  alert(`Você escolheu o ${addTextoBtn[2]}! Clique para continuar.`);

  let altura = parseFloat(prompt("Digite a altura da Lata de óleo (em cm): "));
  let raio = parseFloat(prompt("Digite o raio da Lata de óleo: "));

  let pii = 3.14;
  let vol = pii * (raio ** 2) * altura;
  alert(`O Volume é: ${vol}`);
}

function exercise4() {
  alert(`Você escolheu o ${addTextoBtn[3]}! Clique para continuar.`);

  let temp = parseFloat(prompt("Digite quanto tempo levou a viagem (em horas): "));
  let velocidade = parseFloat(prompt("Digite qual era a velocidade média no veículo (em KM): "));

  let distancia = temp * velocidade;
  let litrosUsados = distancia / 12;

  alert(`Tempo da viagem: ${temp} horas\nVelocidade média: ${velocidade} KM/h\nDistância percorrida: ${distancia} KM\nLitros usados: ${litrosUsados}`);
}

function exercise5() {
  alert(`Você escolheu o ${addTextoBtn[4]}! Clique para continuar.`);

  let valor = parseFloat(prompt("Qual é o valor da prestação atrasada: "));
  let taxa = parseFloat(prompt("Qual é a taxa aplicada na prestação atrasada: "));
  let temp = parseFloat(prompt("Digite a quantos dias ela está em atraso: "));

  let prestacao = valor + (valor * taxa / 100) * temp;
  alert(`O valor da prestação será: ${prestacao}`);

}

function exercise6() {
  alert(`Você escolheu o ${addTextoBtn[5]}! Clique para continuar.`);

  let a = parseFloat(prompt("Digite o primeiro valor: "));
  let b = parseFloat(prompt("Digite o segundo valor: "));
  [b, a] = [a, b];

  alert(`Os valores trocados, são respectivamente: ${a}, ${b}`);
}

function exercise7() {
  alert(`Você escolheu o ${addTextoBtn[6]}! Clique para continuar.`);

  let a = parseInt(prompt("Digite o valor de A: "));
  let b = parseInt(prompt("Digite o valor de B: "));
  let c = parseInt(prompt("Digite o valor de C: "));
  let d = parseInt(prompt("Digite o valor de D: "));

  // Results Plus
  let plusResults = `
Resultados Das Somas:
A soma de A com B é: ${a + b}
A soma de A com C é: ${a + c}
A soma de A com D é: ${a + d}
A soma de B com C é: ${b + c}
A soma de B com D é: ${b + d}
A soma de C com D é: ${c + d}
`;

  // Results Mult
  let multResults = `
Resultados Das Multiplicações:
A multiplicação de A com B é: ${a * b}
A multiplicação de A com C é: ${a * c}
A multiplicação de A com D é: ${a * d}
A multiplicação de B com C é: ${b * c}
A multiplicação de B com D é: ${b * d}
A multiplicação de C com D é: ${c * d}
`;

  alert(plusResults + '\n' + multResults);

}

function exercise8() {
  alert(`Você escolheu o ${addTextoBtn[7]}! Clique para continuar.`);

  let comprimento = parseFloat(prompt("Digite o valor do comprimento da caixa: "));
  let altura = parseFloat(prompt("Digite o valor da altura da caixa: "));
  let largura = parseFloat(prompt("Digite o valor da largura da caixa: "));
  let vol = comprimento * altura * largura;

  alert(`O Volume da caixa é: ${vol}`);

}

function exercise9() {
  alert(`Você escolheu o ${addTextoBtn[8]}! Clique para continuar.`);

  let num1 = parseInt(prompt("Digite o primeiro valor: "));
  let num2 = parseInt(prompt("Digite o segundo valor: "));
  let calc = (num1 - num2) ** 2

  alert(`A diferença do primeiro pelo segundo é: ${num1 - num2}`);
  alert(`O quadrado da diferença é: ${calc}`);
}

function exercise10() {
  alert(`Você escolheu o ${addTextoBtn[9]}! Clique para continuar.`);

  let cotacao = parseFloat(prompt("Digite a cotação atual do Dólar (em R$): "));
  let quantidade = parseFloat(prompt("Digite a quantidade de dólares para conversão em reais: "));

  alert(`O valor convertido em R$: ${cotacao * quantidade}`);
}

function exercise11() {
  alert(`Você escolheu o ${addTextoBtn[10]}! Clique para continuar.`);

  let cotacao = parseFloat(prompt("Digite a cotação atual do Dólar (em R$): "));
  let quantidade = parseFloat(prompt("Digite a quantidade de reais para conversão em dólares: "));

  alert(`O valor convertido em US$: ${quantidade / cotacao}`);
}

function exercise12() {
  alert(`Você escolheu o ${addTextoBtn[11]}! Clique para continuar.`);

  let num1 = parseFloat(prompt("Digite o primeiro número: "));
  let num2 = parseFloat(prompt("Digite o segundo número: "));
  let num3 = parseFloat(prompt("Digite o terceiro número: "));
  let calc = (num1 ** 2) + (num2 ** 2) + (num3 ** 2);

  alert(`
O Quadrado do primeiro: ${num1 ** 2}
O Quadrado do segundo: ${(num2 ** 2)}
O Quadrado do terceiro: ${(num3 ** 2)}
A Soma dos Quadrados: ${calc}
`);

}

function exercise13() {
  alert(`Você escolheu o ${addTextoBtn[12]}! Clique para continuar.`);

  let num1 = parseFloat(prompt("Digite o primeiro número: "));
  let num2 = parseFloat(prompt("Digite o segundo número: "));
  let num3 = parseFloat(prompt("Digite o terceiro número: "));

  let calc = num1 + num2 + num3;
  let square = calc ** 2;

  console.log(calc, square);

  alert(`A Soma dos 3 termos: ${calc}
O Quadrado da Soma: ${square}`);

}
// Fim Tarefas pag 25 e 26