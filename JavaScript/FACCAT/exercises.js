import addTextoBtn from './main.js'
addTextoBtn.forEach(e => console.log(e))

let numExercises = 46;

for (let i = 1; i <= numExercises; i++) {
  window[`exercise${i}`] = eval(`exercise${i}`);
}

function exercise1() {
  // Exercício consiste em SOMAR dois valores digitados pelo usuário
  alert(`Você escolheu o ${addTextoBtn[0]}! Clique para continuar.`);

  let numero1 = parseInt(prompt("Digite um número: "));
  let numero2 = parseInt(prompt("Digite outro número: "));
  let soma = numero1 + numero2;

  alert("A soma dos números informados é igual: " + soma);
}

function exercise2() {
  alert(`Você escolheu o ${addTextoBtn[1]}! Clique para continuar.`);

  let numero1 = parseInt(prompt("Digite um valor: "));
  let numero2 = parseInt(prompt("Digite outro valor: "));
  let sub = numero1 - numero2;

  alert("A subtração dos números informados é igual: " + sub);
}

function exercise3() {
  alert(`Você escolheu o ${addTextoBtn[2]}! Clique para continuar.`);

  let numero1 = parseInt(prompt("Digite um valor: "));
  let numero2 = parseInt(prompt("Digite Outro valor: "));
  let mult = numero1 * numero2;

  alert("A multiplicação dos números informados é igual: " + mult);
}

function exercise4() {
  alert(`Você escolheu o ${addTextoBtn[3]}! Clique para continuar.`);

  let number1 = parseInt(prompt("Digite um valor: "));
  let number2 = parseInt(prompt("Digite outro valor: "));

  let div = number1 / number2;
  alert("A divisão dos números informados é igual: " + div);
}

function exercise5() {
  alert(`Você escolheu o ${addTextoBtn[4]}! Clique para continuar.`);

  let number = parseInt(prompt("Digite um número: "));
  let antecessor = number - 1;

  alert(`O Antecessor do número digitado é: ${antecessor}`);
}

function exercise6() {
  alert(`Você escolheu o ${addTextoBtn[5]}! Clique para continuar.`);

  let number1 = parseInt(prompt("Digite a base do retângulo: "));
  let number2 = parseInt(prompt("Digite a altura do retângulo: "));
  let area = number1 * number2;

  alert(`A Área do retângulo é: ${area}`);
}

function exercise7() {
  alert(`Você escolheu o ${addTextoBtn[6]}! Clique para continuar.`);

  let number1 = parseInt(prompt("Digite quantos anos você tem: "));
  let number2 = parseInt(
    prompt("Digite quantos meses se passaram desde seu última aniversário: ")
  );
  let number3 = parseInt(
    prompt(
      "Digite quantos dias se passaram em relação ao mês que você nasceu: "
    )
  );
  let age = number1 * 365 + number2 * 30 + number3;

  alert(`Sua idade em dias é: ${age}`);
}

function exercise8() {
  alert(`Você escolheu o ${addTextoBtn[7]}! Clique para continuar.`);

  let votosTotal = parseInt(prompt("Digite a quantidade de votos totais: "));
  let votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos: "));
  let votosNull = parseInt(prompt("Digite a quantidade de votos nulos: "));
  let votosValidos = parseInt(prompt("Digite a quantidade de votos validos: "));

  let votosBrancosPercent = (votosBrancos * 100) / votosTotal;
  let votosNullPercent = (votosNull * 100) / votosTotal;
  let votosValidosPercent = (votosValidos * 100) / votosTotal;

  alert(`O total de votos é: ${votosTotal}\n
A porcentagem de votos brancos é: ${votosBrancosPercent}%\n
A porcentagem de votos nulos é: ${votosNullPercent}%\n
A porcentagem de votos validos é: ${votosValidosPercent}%
`);
}

function exercise9() {
  alert(`Você escolheu o ${addTextoBtn[8]}! Clique para continuar.`);

  let salario = parseInt(prompt("Digite seu salário atual: "));
  let percentReajuste = parseInt(prompt("Digite a porcentagem do reajuste: "));

  let reajuste = salario * (1 + percentReajuste / 100);
  alert(`Seu salário reajustado é: ${reajuste}`);
}

function exercise10() {
  alert(`Você escolheu o ${addTextoBtn[9]}! Clique para continuar.`);

  let custo = parseInt(prompt("Digite o custo de fábrica do carro: "));
  let valorFinal = custo * (28 / 100) + custo * (45 / 100) + custo;

  alert(`O valor final com os impostos é: ${valorFinal}`);
}

function exercise11() {
  alert(`Você escolheu o ${addTextoBtn[10]}! Clique para continuar.`);

  let salarioFixo = parseInt(prompt("Digite seu salário fixo: "));
  let comissaoPorCarro = parseInt(
    prompt("Digite quanto é dado de comissão por venda de carro: ")
  );
  let carrosVendidos = parseInt(prompt("Digite quantos carros você vendeu: "));
  let comissaoFinal = carrosVendidos * comissaoPorCarro;

  carrosVendidos += comissaoFinal + comissaoFinal * 0.05;
  let salarioFinal = salarioFixo + carrosVendidos;

  alert(`Seu salário final é: ${salarioFinal}`);
}

function exercise12() {
  alert(`Você escolheu o ${addTextoBtn[11]}! Clique para continuar.`);

  let gCelsius = parseInt(prompt("Digite a temperatura em Celsius: "));
  let gFahren = gCelsius * (9 / 5) + 32;

  alert(`A temperatura em Fahrenheit é: ${gFahren}`);
}

function exercise13() {
  alert(`Você escolheu o ${addTextoBtn[12]}! Clique para continuar.`);

  let nota1 = parseInt(prompt("Digite a primeira nota: "));
  let nota2 = parseInt(prompt("Digite a segunda nota: "));
  let nota3 = parseInt(prompt("Digite a terceira nota: "));
  let mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

  alert(`A media ponderada é: ${mediaFinal}`);
}

function exercise14() {
  /**
   * Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso
      contrário escrever NÃO É MAIOR QUE 10! 
   */
  alert(`Você escolheu o ${addTextoBtn[13]}! Clique para continuar.`);

  let number = parseInt(prompt("Digite um número: "));
  if (number > 10) alert("O número é maior que 10!");
  else alert("O número não é maior que 10!");
}

function exercise15() {
  /* Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). */
  alert(`Você escolheu o ${addTextoBtn[14]}! Clique para continuar.`);

  let number = parseInt(prompt("Digite um número: "));
  if (number >= 0) alert("O número é Positivo");
  else alert("O número é Negativo!");
}

function exercise16() {
  /* As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
    compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
    escreva o custo total da compra. 
  */

  alert(`Você escolheu o ${addTextoBtn[15]}! Clique para continuar.`);

  alert(
    `O valor da maça é R$ 1,30 se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12.`
  );
  let quantidade = parseInt(prompt("Digite quantas maças você vai levar: "));
  let total = 0;

  if (quantidade >= 12) total = quantidade * 1.0;
  else total = quantidade * 1.3;

  alert(`O valor total da sua compra é de R$ ${total}.`);
}

function exercise17() {
  /*
    Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
    uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
    aluno é aprovado). Escrever também a média calculada.
  */

  alert(`Você escolheu o ${addTextoBtn[16]}! Clique para continuar.`);

  let nota1 = parseInt(prompt("Digite a primeira nota: "));
  let nota2 = parseInt(prompt("Digite a segunda nota: "));
  let media = (nota1 + nota2) / 2;

  if (media >= 6) alert(`Aluno Aprovado\nMédia: ${media}`);
  else alert(`Aluno Reprovado\nMédia: ${media}`);
}

function exercise18() {
  /*
    Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
    poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 
  */

  alert(`Você escolheu o ${addTextoBtn[17]}! Clique para continuar.`);

  let anoNascimento = parseInt(prompt("Digite seu ano de nascimento: "));
  let anoAtual = new Date().getFullYear();
  let verify = anoAtual - anoNascimento;

  if (verify >= 16) alert("Você poderá votar!");
  else alert("Você não tem idade para votar!");
}

function exercise19() {
  /* Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. */

  alert(`Você escolheu o ${addTextoBtn[18]}! Clique para continuar.`);

  let valor1 = parseInt(prompt("Digite o primeiro número: "));
  let valor2 = parseInt(prompt("Digite o segundo número: "));

  if (valor1 > valor2) alert(`O valor maior é: ${valor1}`);
  else alert(`O valor maior é: ${valor2}`);
}

function exercise20() {
  /* Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. */

  alert(`Você escolheu o ${addTextoBtn[19]}! Clique para continuar.`);

  let valor1 = parseInt(prompt("Digite o primeiro número: "));
  let valor2 = parseInt(prompt("Digite o segundo número: "));

  if (valor1 > valor2) alert(`Em ordem crescente: ${valor2}, ${valor1}`);
  else alert(`Em ordem crescente: ${valor1}, ${valor2}`);
}

function exercise21() {
  /* 
    Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
    minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
    de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.  
  */

  alert(`Você escolheu o ${addTextoBtn[20]}! Clique para continuar.`);

  let horarioComeco = parseInt(
    prompt("Digite o horário de começo da partida: ")
  );
  let horarioFim = parseInt(
    prompt("Digite o horário de finalização da partida: ")
  );

  let calcHora = 0;

  if (horarioComeco > horarioFim) calcHora = 24 - horarioComeco + horarioFim;
  else if (horarioComeco == horarioFim) calcHora = 12;
  else calcHora = horarioFim - horarioComeco;

  alert(`O jogo durou ${calcHora} horas.`);
}

function exercise22() {
  /* 
    A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
    de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
    Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
    o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
    (considere que o mês possua 4 semanas exatas).
  */

  alert(`Você escolheu o ${addTextoBtn[21]}! Clique para continuar.`);

  let horasMes = parseInt(
    prompt("Digite o numero de horas trabalhadas em um mês: ")
  );
  let salarioHora = parseInt(prompt("Digite o valor da hora regular: "));
  let jornadaMin = 40 * 4;
  let salarioTotal = 0;

  if (horasMes > jornadaMin) {
    let horasExtras = horasMes - jornadaMin;
    salarioTotal = salarioHora * jornadaMin + horasExtras * (salarioHora * 1.5);
  } else salarioTotal = salarioHora * horasMes;

  alert(`O valor do seu salaário é de R$ ${salarioTotal}.`);
}

function exercise23() {
  /**
   * Programa que indica qual seu peso ideal de acordo com seu sexo
  */

  alert(`Você escolheu o ${addTextoBtn[22]}! Clique para continuar.`);

  let name = prompt("Digite o seu nome: ");
  let sex = prompt("Digite o seu sexo (M/F): ");
  let height = parseFloat(prompt("Digite o sua altura (use . no lugar da virgula): "))
  let ideal = 0;

  if (sex.toUpperCase() == "M") ideal = 72.7 * height - 58;
  else if (sex.toUpperCase() == "F") ideal = 62.1 * height - 44.7;
  alert(`${name}, o seu peso ideal é de ${ideal} kg.`);
}

function exercise24() {
  /**
   * Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
    ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
    ultrapassar este valor, calcular e escrever o seu salário total
  */

  alert(`Você escolheu o ${addTextoBtn[23]}! Clique para continuar.`);

  let salarioFixo = parseFloat(prompt("Digite seu salário fixo: "));
  let totalVendas = parseFloat(prompt("Digite o valor total de vendas: "));
  let salarioTotal, vendasExtras = 0

  if (totalVendas > 1500) { vendasExtras = totalVendas - 1500; }

  if (totalVendas <= 1500) salarioTotal = salarioFixo + totalVendas * 1.03;
  else salarioTotal = salarioFixo + ((totalVendas - vendasExtras) * 1.03) + (vendasExtras * 1.05);
  alert(`Seu salário total é: ${salarioTotal}`);
}

function exercise25() {
  /**
   * Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
    escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
    ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 
  */

  alert(`Você escolheu o ${addTextoBtn[24]}! Clique para continuar.`);

  let conta = parseInt(prompt("Digite o número da sua conta: "));
  let saldo = parseFloat(prompt("Digite o valor do seu Saldo: "));
  let debito = parseFloat(prompt("Digite o valor do seu Débito: "));
  let credito = parseFloat(prompt("Digite o valor do seu Crédito: "));

  let saldoAtual = saldo - debito + credito;
  let isSaldo = ""

  if (saldoAtual >= 0) isSaldo = "Saldo Positivo";
  else isSaldo = "Saldo Negativo";
  alert(`Sua conta é a de número: ${conta}\nSeu saldo é: ${isSaldo}`);
}

function exercise26() {
  /**
   * Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
    quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
    média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
    a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
    compra'. 
  */

  alert(`Você escolheu o ${addTextoBtn[25]}! Clique para continuar.`);

  let quantProdAtual = parseInt(prompt("Digite a quantidade de produtos em estoque: "));
  let quantMax = parseInt(prompt("Digite a quantidade máxima que o estoque comporta: "));
  let quantMin = parseInt(prompt("Digite a quantidade mínima que o estoque precisa: "));

  let quantMedia = (quantMax + quantMin) / 2;
  let isEfetuar = ""

  if (quantProdAtual >= quantMedia) isEfetuar = "Não efetuar compra";
  else isEfetuar = "Efetuar compra";
  alert(`A quantidade meça de estoque é: ${quantMedia}\n${isEfetuar}`);
}

function exercise27() {
  /**
   * Ler um valor e escrever se é positivo, negativo ou zero.
  */

  alert(`Você escolheu o ${addTextoBtn[26]}! Clique para continuar.`);

  let number = parseInt(prompt("Digite um número: "));
  let isNumberWhat = ""

  if (number > 0) isNumberWhat = "Positivo";
  else if (number == 0) isNumberWhat = "Nulo";
  else isNumberWhat = "Negativo";

  alert(`O Número digitado é: ${isNumberWhat}`);
}

function exercise28() {
  /**
   * Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.
  */

  alert(`Você escolheu o ${addTextoBtn[27]}! Clique para continuar.`);

  let number1 = parseInt(prompt("Digite o primeiro número: "));
  let number2 = parseInt(prompt("Digite o segundo número: "));
  let number3 = parseInt(prompt("Digite o terceiro número: "));


  if (number1 > number2) {
    if (number1 > number3) alert(`O maior número é: ${number1}`);
    else alert(`O maior número é: ${number3}`);
  }
  else if (number2 > number3) alert(`O maior número é: ${number2}`);
  else alert(`O maior número é: ${number3}`);
}

function exercise29() {
  /**
   * Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores
  */

  alert(`Você escolheu o ${addTextoBtn[28]}! Clique para continuar.`);

  let number1 = parseInt(prompt("Digite o primeiro número: "));
  let number2 = parseInt(prompt("Digite o segundo número: "));
  let number3 = parseInt(prompt("Digite o terceiro número: "));
  let somados = 0

  if (number1 > number2) {
    if (number2 > number3) somados = number1 + number2
    else somados = number1 + number3
  }
  else if (number1 > number3) somados = number2 + number1
  else somados = number2 + number3

  alert(`A soma dos 2 maiores números informados é: ${somados}`);
}

function exercise30() {
  /**
   * Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.
  */

  alert(`Você escolheu o ${addTextoBtn[29]}! Clique para continuar.`);

  let number1 = parseInt(prompt("Digite o primeiro número: "));
  let number2 = parseInt(prompt("Digite o segundo número: "));
  let number3 = parseInt(prompt("Digite o terceiro número: "));
  let ordem = []

  if (number1 > number2) {
    if (number2 > number3) ordem = [number3, number2, number1]
    else ordem = [number2, number3, number1]
  }
  else if (number2 > number3) {
    if (number3 > number1) ordem = [number1, number3, number2]
    else ordem = [number3, number1, number2]
  }
  else {
    if (number1 > number2) ordem = [number2, number1, number3]
    else ordem = [number1, number2, number3]
  }

  alert(`Os número em ordem crescente: ${ordem}`);
}

function exercise31() {
  /**
   * Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
    ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
    dos outros 2 lados. 
  */

  alert(`Você escolheu o ${addTextoBtn[30]}! Clique para continuar.`);

  let number1 = parseInt(prompt("Digite o primeiro número: "));
  let number2 = parseInt(prompt("Digite o segundo número: "));
  let number3 = parseInt(prompt("Digite o terceiro número: "));

  if ((number1 > number2 + number3) || (number2 > number1 + number3) || (number3 > number1 + number2)) alert(`Os valores não forma um triângulo.`)
  else alert(`Os valores formam um triângulo.`)
}

function exercise32() {
  /**
   * Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
    do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 
   */

  alert(`Você escolheu o ${addTextoBtn[31]}! Clique para continuar.`);

  let time1 = prompt("Digite o nome do primeiro time: ");
  let time2 = prompt("Digite o nome do segundo time: ");

  let gols1 = parseInt(prompt("Digite o número de gols do primeiro time: "));
  let gols2 = parseInt(prompt("Digite o número de gols do segundo time: "));

  let vencedor = ''

  if (gols1 > gols2) vencedor = time1
  else if (gols1 < gols2) vencedor = time2
  else vencedor = 'EMPATE'

  alert("O vencedor é: " + vencedor);

}

function exercise33() {
  /* 
    Ler dois valores e imprimir uma das três mensagens a seguir:
      ‘Números iguais’, caso os números sejam iguais
      ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
      ‘Segundo maior’, caso o segundo seja maior que o primeiro.  
  */

  alert(`Você escolheu o ${addTextoBtn[32]}! Clique para continuar.`);

  let number1 = parseInt(
    prompt("Digite um número: ")
  );
  let number2 = parseInt(
    prompt("Digite outro número: ")
  );

  let isMoreThen = number1 > number2 ? 'Primeiro maior' : number1 == number2 ? 'Iguais' : 'Segundo maior';

  alert(`Sobre os números: ${isMoreThen}`);
}

// Daqui em diante, TODOS os exercicios são +1, então esse NÃO É o 34, é o 35!!!
function exercise34() {
  /*Um posto está vendendo combustíveis com a seguinte tabela de descontos:
  Álcool:até 20 litros, desconto de 3% por litro, acima de 20 litros, desconto de 5% por litro
  Gasolina: até 20 litros, desconto de 4% por litro, acima de 20 litros, desconto de 6% por litro
  Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
  seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
  que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. 
*/

  alert(`Você escolheu o ${addTextoBtn[33]}! Clique para continuar.`);

  alert(`Bem vindo ao posto de gasolina da Faccat\nÁlcool: R$2.90 / Gasolina: R$3.30`);
  alert(`Álcool até 20L: 3% de desconto / Acima disso: 5% de desconto\nGasolina até 20L: 4% de desconto / Acima disso: 6% de desconto`);

  let combustivel = prompt("Escolha o tipo de combustível (A - alcool, G - gasolina): ");
  let litros = parseInt(prompt("Digite quantos litros deseja abastecer: "))
  let preco = 0

  if (litros > 20) {
    if (combustivel.toUpperCase() == 'A') preco = litros * 2.9 * (1 - 0.05)
    else if (combustivel.toUpperCase() == 'G') preco = litros * 3.3 * (1 - 0.05)
  } else {
    if (combustivel.toUpperCase() == 'A') preco = litros * 2.9 * (1 - 0.03)
    else if (combustivel.toUpperCase() == 'G') preco = litros * 3.3 * (1 - 0.03)
  }

  alert(`O valor a ser pago é de R$${preco.toFixed(2)}`);
}

// ^ Até aqui foi tudo feito!!!
function exercise35() {
  /*  Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
    dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
    das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
    novo com a mulher mais velha.
  */
  alert(`Você escolheu o ${addTextoBtn[34]}! Clique para continuar.`);

  let idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem: "));
  let idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem: "));
  let idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher: "));
  let idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher: "));

  let maiorH, menorH, maiorM, menorM;

  if (idadeHomem1 > idadeHomem2) {
    maiorH = idadeHomem1 
    menorH = idadeHomem2
  }
  else {
    maiorH = idadeHomem2
    menorH = idadeHomem1
  }
  if (idadeMulher1 > idadeMulher2) {
    maiorM = idadeMulher1
    menorM = idadeMulher2
  }
  else {
    maiorM = idadeMulher2
  }

  let somaIdades = maiorH + menorM
  let multIdades = menorH * maiorM

  alert(`A soma das idades do homem mais velho com a mulher mais nova é: ${somaIdades}`);
  alert(`O produto das idades do homem mais novo com a mulher mais velha é: ${multIdades}`);
}

function exercise36() {
  /*  Uma fruteira está vendendo frutas com a seguinte tabela de preços: 
        Morango = 2,50 | Maca = 1,80 p/KG (até 5Kg)
        Morango = 2,20 | Maca = 1,50 p/KG (acima de 5Kg)
      Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
    ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
    morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
  */
  alert(`Você escolheu o ${addTextoBtn[35]}! Clique para continuar.`);

}

function exercise37() {
  /*   
  */
  alert(`Você escolheu o ${addTextoBtn[36]}! Clique para continuar.`);

}

function exercise38() {
  /*   
  */
  alert(`Você escolheu o ${addTextoBtn[37]}! Clique para continuar.`);

}

function exercise39() {
  /*   
  */
  alert(`Você escolheu o ${addTextoBtn[38]}! Clique para continuar.`);

}

function exercise40() {
  /*   
  */
  alert(`Você escolheu o ${addTextoBtn[39]}! Clique para continuar.`);

}

function exercise41() {
  /*   
  */
  alert(`Você escolheu o ${addTextoBtn[40]}! Clique para continuar.`);

}

function exercise42() {
  /*   
  */
  alert(`Você escolheu o ${addTextoBtn[41]}! Clique para continuar.`);

}

function exercise43() {
  /*   
  */
  alert(`Você escolheu o ${addTextoBtn[42]}! Clique para continuar.`);

}

function exercise44() {
  /*   
  */
  alert(`Você escolheu o ${addTextoBtn[43]}! Clique para continuar.`);

}

function exercise45() {
  /*   
  */
  alert(`Você escolheu o ${addTextoBtn[44]}! Clique para continuar.`);

}

function exercise46() {
  /*   
  */
  alert(`Você escolheu o ${addTextoBtn[45]}! Clique para continuar.`);

}