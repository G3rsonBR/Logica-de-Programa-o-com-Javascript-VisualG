Algoritmo "Verifica Saldo"
// Disciplina   : [Linguagem e L�gica de Programa��o com JS]
// Professor   : Jailson
// Descri��o   : Calcule o saldo do usu�rio
// Autor(a)    : Gerson Silva
// Data atual  : 25/03/2024
Var
   numConta, saldo, debito, credito, saldoAtual: real

Inicio
   Escreva("Digite o n�mero da sua conta: ")
   Leia(numConta)
   Escreva("Digite o valor do seu saldo: ")
   Leia(saldo)
   Escreva("Digite seu valor de d�bito: ")
   Leia(debito)
   Escreva("Digite seu valor de cr�dito: ")
   Leia(credito)

   saldoAtual <- saldo - debito + credito

   se saldoAtual >= 0 entao
      Escreva("Saldo Positivo.")
   senao
      Escreva("Saldo Negativo.")
   fimse

Fimalgoritmo