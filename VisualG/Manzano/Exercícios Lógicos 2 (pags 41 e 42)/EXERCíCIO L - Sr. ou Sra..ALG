Algoritmo "Exercicio4L"
// Disciplina   : [Linguagem e L�gica de Programa��o em JS]
// Professor   : Jailson
// Descri��o   : Sr. ou Sra.
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 05/04/2024
Var
   nome, sexo: caractere

Inicio
   Escreva("Digite seu nome: ")
   Leia(nome)
   Escreva("Digite seu sexo (M/F): ")
   Leia(sexo)

   Se sexo = "M" entao
      Escreva("llmo Sr. ", nome)
   Senao
      Escreva("llma Sra.: ", nome)
   FimSe

Fimalgoritmo