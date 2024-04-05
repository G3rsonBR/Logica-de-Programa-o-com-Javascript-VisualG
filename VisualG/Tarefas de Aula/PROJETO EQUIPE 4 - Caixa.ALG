Algoritmo "Projeto Equipe 4 Caixa Eletrônico"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Criando um sistema de caixa eletrônico
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 27/03/2024
Var
   opc, voltarMenu, corrijaOpc:inteiro

Inicio
   voltarMenu <- 1
   corrijaOpc <- 1

   //timer(1000)

   Enquanto voltarMenu = 1 Faca
      voltarMenu <- 1
      corrijaOpc <- 1

      LimpaTela
      Escreval("Projeto de Caixa Eletrônico (EQUIPE 4)")
      Escreval("")
      Escreval("---- Menu ----")
      Escreval("1 - Saque")
      Escreval("2 - Deposito")
      Escreval("3 - Pagamento")
      Escreval("4 - Transferencia")
      Escreval("5 - Saldo")
      Escreval("6 - Extrato")
      Escreval("7 - PIX")
      Escreval("8 - Cancelar")
      Escreva("Selecione uma opção: ")
      Leia(opc)

      LimpaTela
      Escreval("")

      Escolha opc
      Caso 1
         Escreval("---- Saque ----")

         Enquanto corrijaOpc <> 0 faca
            Escreva("Deseja voltar? 1 - Sim, 0 - Não: ")
            Leia(voltarMenu)

            Se voltarMenu < 0 entao
               Escreval("Digite um valor valido!")
               Escreval("")
            Senao
               Se voltarMenu > 1 entao
                  Escreval("Digite um valor valido!")
                  Escreval("")
               Senao
                  corrijaOpc <- 0
               FimSe
            FimSe
         FimEnquanto
      Caso 2
         Escreval("---- Deposito ----")
      Caso 3
         Escreval("---- Pagamento ----")
      Caso 4
         Escreval("---- Transferencia ----")
      Caso 5
         Escreval("---- Saldo ----")
      Caso 6
         Escreval("---- Extrato ----")
      Caso 7
         Escreval("---- PIX ----")
      Caso 8
         Escreval("---- Cancelar ----")
      OutroCaso
         Escreval("Digite um valor valido!")
      FimEscolha
   FimEnquanto

   Escreval("Oi")




Fimalgoritmo