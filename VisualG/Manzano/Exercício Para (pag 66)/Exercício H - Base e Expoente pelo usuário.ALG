Algoritmo "Exerc�cios1H"
// Disciplina   : [Linguagem e L�gica de Programa��o com JS]
// Professor   : Jailson
// Descri��o   : Base e Expoente pelo usu�rio
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
Var
   count, base, expoente: inteiro
   calc: real

Inicio
   Escreva("Digite a base: ")
   Leia(base)
   Escreva("Digite o expoente: ")
   Leia(expoente)

   para count de 0 ate expoente passo 1 faca
      Se count = 0 entao
         calc <- 1
      Senao
         calc <- calc * base
      FimSe
      Escreval(base," ^",count," �:", calc)
   FimPara

Fimalgoritmo