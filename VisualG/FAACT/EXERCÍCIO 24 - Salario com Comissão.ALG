Algoritmo "Salario com Comissão"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Calcule o salario de um vendedor de acordo com suas vendas
// Autor(a)    : Gerson Silva
// Data atual  : 25/03/2024
Var
   salarioFixo, totalVendas, totalSalario: real

Inicio
   Escreva("Digite seu salário fixo: ")
   Leia(salarioFixo)
   Escreva("Digite o valor total de suas vendas: ")
   Leia(totalVendas)

   se totalVendas <= 1500 entao
      totalSalario <- salarioFixo + totalVendas * 1.03
   senao
      totalSalario <- salarioFixo + totalVendas * 1.08
   fimse

   Escreva("Seu salário total é: ", totalSalario)

Fimalgoritmo