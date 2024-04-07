Algoritmo "Exercício1E"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Soma dos Fatoriais
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
Var
   count, valor, somatorio, fatorial: real

Inicio
   Repita
      count <- count + 1
      Escreva("Digite o", count, " valor: ")
      Leia(valor)
      
      fatorial <- valor
      Repita
          valor <- valor - 1
          fatorial <- fatorial * valor
      Até valor <= 1

      somatorio <- somatorio + fatorial
   Até count = 15
   
   Escreval("")
   Escreva("O somatório de todos os fatoriais dos números solicitados são: ", somatorio)
   
Fimalgoritmo