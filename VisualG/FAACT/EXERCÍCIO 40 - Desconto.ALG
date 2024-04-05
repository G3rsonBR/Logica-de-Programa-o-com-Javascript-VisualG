Algoritmo "Desconto"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Algoritmo que calcula o desconto de uma peça
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 03/04/2024
Var
   nomeProd: caractere
   quantidade: inteiro
   precoUni, total, desconto: real

Inicio
   Escreva("Digite o nome do produto: ")
   Leia(nomeProd)
   Escreva("Digite o preço unitário do produto: ")
   Leia(precoUni)
   Escreva("Digite a quantidade adquirida: ")
   Leia(quantidade)
   
   total <- quantidade * precoUni
   Se quantidade > 10 entao
      desconto <- total * 0.05
   Senao
      Se (quantidade > 5) E (quantidade <= 10) entao
         desconto <- total * 0.03
      Senao
         desconto <- total * 0.02
      FimSe
   FimSe
   
   Escreval("")
   Escreval("Produto: ", nomeProd)
   Escreval("Quantidade: ", quantidade)
   Escreval("Preço unitário: ", precoUni)
   Escreva("Total a pagar: ", total - desconto)

Fimalgoritmo