Algoritmo "Exerc�cio1D"
// Disciplina   : [Linguagem e L�gica de Programa��o com JS]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Somar gr�o em um tabuleiro de xadrez
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 06/04/2024
Var
   count, atual: real

Inicio
   Repita
      atual <- atual + (2 ^ count)
      count <- count + 1
   At� count > 64

   Escreval("(Considere o enunciado da quest�o...)")
   Escreva("A soma dos n�meros de gr�os em um tabuleiro de xadrez �: ", atual)
   
Fimalgoritmo