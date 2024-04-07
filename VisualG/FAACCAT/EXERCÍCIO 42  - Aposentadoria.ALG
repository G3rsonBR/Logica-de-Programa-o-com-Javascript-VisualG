Algoritmo "Aposentadoria"
// Disciplina   : [Linguagem e Lógica de Programação com JS]
// Professor   : Jailson
// Descrição   : Algoritmo que verifica se um funcionário está nos requisitos para aposentadoria
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 03/04/2024
Var
   nascimento, codFuncionario, ingressoEmpresa, tempoTrabalhado, anoAtual, idadeFuncionario:inteiro
   vaiAposentar: caractere
Inicio
   anoAtual <- 2024
   Escreva("Digite seu ID de funcionário: ")
   Leia(codFuncionario)
   Escreva("Digite seu ano de nascimento: ")
   Leia(nascimento)
   Escreva("Digite seu ano de entrada na empresa: ")
   Leia(ingressoEmpresa)

   idadeFuncionario <- anoAtual - nascimento
   tempoTrabalhado <- anoAtual - ingressoEmpresa

   Se (idadeFuncionario >= 65) OU (tempoTrabalhado >= 30) OU ((idadeFuncionario >= 60) E (tempoTrabalhado >= 25)) entao
      vaiAposentar <- "Requerer aposentadoria"
   Senao
      vaiAposentar <- "Não requerer"
   FimSe
   
   Escreval("")
   Escreval("Idade:", idadeFuncionario)
   Escreval("Tempo na Empresa:", tempoTrabalhado)
   Escreva("Ápto para aposentar: ", vaiAposentar)


Fimalgoritmo