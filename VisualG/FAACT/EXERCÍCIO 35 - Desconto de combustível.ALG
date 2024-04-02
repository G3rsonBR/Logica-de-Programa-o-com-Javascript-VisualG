Algoritmo "DescontoCombustivel"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Algoritmo que calcula um desconto aplicado pela quantidade e tipo de combustivel
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 01/04/2024
Var
   combustivel: caractere
   quantidade, desconto, valor: real

Inicio
   Escreval("Tabela de combustíveis: ")
   Escreval("A - Alcool (R$2,90)")
   Escreval("G - Gasolina (R$3,30)")

   Escreval("")
   Escreval("Temos uma promoção!")
   Escreval("Alcool até 20L, 3% de desconto, acima disso, 5% de desconto")
   Escreval("Gasolina até 20L, 4% de desconto, acima disso, 6% de desconto")

   Escreval("")
   Escreva("Digite o tipo de combustível (Apenas a letra da tabela): ")
   Leia(combustivel)
   Escreva("Digite a quantidade de combustível (em Litros): ")
   Leia(quantidade)

   Se combustivel = "A" entao
      valor <- quantidade * 2.9
      Se quantidade > 20 entao
         desconto <- valor - (valor * 0.05)
      Senao
         desconto <- valor - (valor * 0.03)
      FimSe
   Senao
      Se combustivel = "G" entao
         valor <- quantidade * 3.3
         Se quantidade > 20 entao
            desconto <- valor - (valor * 0.06)
         Senao
            desconto <- valor - (valor * 0.04)
         FimSe
      FimSe
   FimSe
   
   Escreval("")
   Escreval("Tipo de combustível: ", combustivel)
   Escreval("Vai pagar R$", desconto)


Fimalgoritmo