import addTextoBtn from './main.js'
addTextoBtn.forEach(e => console.log(e))

let numExercises = 25;

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

// Exercícios pag 41 e 42
function exercise14() {
  alert(`Você escolheu o ${addTextoBtn[13]}! Clique para continuar.`);

  const num1 = parseInt(prompt("Digite o primeiro valor: "));
  const num2 = parseInt(prompt("Digite o segundo valor: "));

  if (num1 > num2) alert(`O produto do maior pelo menor é: ${num1 - num2}`);
  else alert(`O produto do maior pelo menor é: ${num2 - num1}`);
}

function exercise15() {
  alert(`Você escolheu o ${addTextoBtn[14]}! Clique para continuar.`);

  const num = parseInt(prompt("Digite um valor: "));

  if (num < 0) alert(`O módulo de ${num} é: ${-num}`);
  else alert(`O módulo de ${num} é: ${num}`);
}

function exercise16() {
  alert(`Você escolheu o ${addTextoBtn[15]}! Clique para continuar.`);

  const nota1 = parseFloat(prompt("Digite a primeira nota: "));
  const nota2 = parseFloat(prompt("Digite a segunda nota: "));
  const nota3 = parseFloat(prompt("Digite a terceira nota: "));
  const nota4 = parseFloat(prompt("Digite a quarta nota: "));

  const media = (nota1 + nota2 + nota3 + nota4) / 4;

  alert(`Média: ${media}`);
  if (media >= 5) alert("Aluno aprovado!");
  else alert("Aluno não foi aprovado");
}

function exercise17() {
  alert(`Você escolheu o ${addTextoBtn[16]}! Clique para continuar.`);

  const nota1 = parseFloat(prompt("Digite a primeira nota: "));
  const nota2 = parseFloat(prompt("Digite a segunda nota: "));
  const nota3 = parseFloat(prompt("Digite a terceira nota: "));
  const nota4 = parseFloat(prompt("Digite a quarta nota: "));

  let media = (nota1 + nota2 + nota3 + nota4) / 4;

  if (media >= 7) alert("Aluno aprovado!");
  else {
    const exam = parseFloat(prompt("Digite a nota de Exame: "));

    media = (media + exam) / 2;
    if (media >= 5) alert("Aluno em Exame!");
    else alert("Aluno não foi Aprovado");
  }

  alert(`Média: ${media}`);
}

function exercise18() {
  alert(`Você escolheu o ${addTextoBtn[17]}! Clique para continuar.`);

  const a = parseFloat(prompt("Digite o valor de A: "));
  const b = parseFloat(prompt("Digite o valor de B: "));
  const c = parseFloat(prompt("Digite o valor de C: "));

  const delta = (b ** 2) - 4 * a * c;

  if (a !== 0) {
    if (delta !== 0) {
      if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("Raiz 1: " + x1);
        alert("Raiz 2: " + x2);
      } else alert("A Equação não possui raízes reais");
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      alert("Ambas as raízes são: " + x1);
    }
  } else alert("A = 0, cálculo não possível");
}

function exercise19() {
  alert(`Você escolheu o ${addTextoBtn[18]}! Clique para continuar.`);

  const a = parseFloat(prompt("Digite o valor de A: "));
  const b = parseFloat(prompt("Digite o valor de B: "));
  const c = parseFloat(prompt("Digite o valor de C: "));

  let order;

  if (a > b && a > c) {
    order = (b > c) ? `${c}, ${b}, ${a}` : `${b}, ${c}, ${a}`;
  } else if (b > a && b > c) {
    order = (a > c) ? `${c}, ${a}, ${b}` : `${a}, ${c}, ${b}`;
  } else if (c > a && c > b) {
    order = (b > a) ? `${a}, ${b}, ${c}` : `${b}, ${a}, ${c}`;
  }

  alert(`Em ordem: ${order}`);
}

function exercise20() {
  alert(`Você escolheu o ${addTextoBtn[19]}! Clique para continuar.`);

  const num1 = parseFloat(prompt("Digite o valor 1: "));
  const num2 = parseFloat(prompt("Digite o valor 2: "));
  const num3 = parseFloat(prompt("Digite o valor 3: "));
  const num4 = parseFloat(prompt("Digite o valor 4: "));

  let divisibles = "Os números divisíveis por 2 e 3 são:\n";

  if (num1 % 2 === 0 && num1 % 3 === 0) divisibles += num1 + "\n";
  if (num2 % 2 === 0 && num2 % 3 === 0) divisibles += num2 + "\n";
  if (num3 % 2 === 0 && num3 % 3 === 0) divisibles += num3 + "\n";
  if (num4 % 2 === 0 && num4 % 3 === 0) divisibles += num4 + "\n";

  alert(divisibles);
}

function exercise21() {
  alert(`Você escolheu o ${addTextoBtn[20]}! Clique para continuar.`);

  const num1 = parseInt(prompt("Digite o valor 1: "));
  const num2 = parseInt(prompt("Digite o valor 2: "));
  const num3 = parseInt(prompt("Digite o valor 3: "));
  const num4 = parseInt(prompt("Digite o valor 4: "));
  const num5 = parseInt(prompt("Digite o valor 5: "));

  let maior, menor;

  // num1
  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) maior = num1;
  else if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) menor = num1;

  // num2
  if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) maior = num2;
  else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) menor = num2;

  // num3
  if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) maior = num3;
  else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5) menor = num3;

  // num4
  if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) maior = num4;
  else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5) menor = num4;

  // num5
  if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) maior = num5;
  else if (num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4) menor = num5;

  alert(`O menor é: ${menor}\nO maior é: ${maior}`);

}

function exercise22() {
  alert(`Você escolheu o ${addTextoBtn[21]}! Clique para continuar.`);

  const num = parseInt(prompt("Digite um valor: "));

  if (num % 2 === 0) alert("O valor é par");
  else alert("O valor é ímpar");
}

function exercise23() {
  alert(`Você escolheu o ${addTextoBtn[22]}! Clique para continuar.`);

  const num = parseInt(prompt("Digite um valor (de 1 a 9): "));

  if (num < 1 || num > 9) alert("Número fora do intervalo permitido");
  else alert("Número dentro do intervalo permitido");
}

function exercise24() {
  alert(`Você escolheu o ${addTextoBtn[23]}! Clique para continuar.`);

  const num = parseInt(prompt("Digite um valor (menor que 3): "));

  if (num > 3) alert("Número maior que 3!");
  else alert("Número é: " + num);
}

function exercise25() {
  alert(`Você escolheu o ${addTextoBtn[24]}! Clique para continuar.`);

  const nome = prompt("Digite seu nome: ");
  const sexo = prompt("Digite seu sexo (M/F): ");

  if (sexo.toUpperCase() === "M") alert("Ilmo Sr. " + nome);
  else if (sexo.toUpperCase() === 'F') alert("Ilma Sra.: " + nome);
  else alert("Opção inválida");
}