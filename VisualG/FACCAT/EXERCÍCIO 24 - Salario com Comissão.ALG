Algoritmo "Salario com Comiss�o"
// Disciplina   : [Linguagem e L�gica de Programa��o com JS]
// Professor   : Jailson
// Descri��o   : Calcule o salario de um vendedor de acordo com suas vendas
// Autor(a)    : Gerson Silva
// Data atual  : 25/03/2024
Var
   salarioFixo, totalVendas, totalSalario: real

Inicio
   Escreva("Digite seu sal�rio fixo: ")
   Leia(salarioFixo)
   Escreva("Digite o valor total de suas vendas: ")
   Leia(totalVendas)

   se totalVendas <= 1500 entao
      totalSalario <- salarioFixo + totalVendas * 1.03
   senao
      totalSalario <- salarioFixo + totalVendas * 1.08
   fimse

   Escreva("Seu sal�rio total �: ", totalSalario)

Fimalgoritmo