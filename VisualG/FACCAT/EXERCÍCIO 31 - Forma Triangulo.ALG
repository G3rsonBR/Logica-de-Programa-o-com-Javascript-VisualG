Algoritmo "Forma Triangulo"
// Disciplina   : [Linguagem e Lï¿½gica de Programação com Js]
// Professor   : Jailson
// Descrição   : Verifica se Forma Triangulo
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 26/03/2024
Var
   lado1, lado2, lado3:inteiro

Inicio
   Escreva("Digite o primeiro lado: ")
   Leia(lado1)
   Escreva("Digite o segundo lado: ")
   Leia(lado2)
   Escreva("Digite o terceiro lado: ")
   Leia(lado3)

   Se (lado1 > lado2 + lado3) ou (lado2 > lado1 + lado3) ou (lado3 > lado2 + lado1) entao
      Escreva("Não forma triangulo!")
   Senao
      Escreva("Forma Triangulo!")
   FimSe
   
Fimalgoritmo