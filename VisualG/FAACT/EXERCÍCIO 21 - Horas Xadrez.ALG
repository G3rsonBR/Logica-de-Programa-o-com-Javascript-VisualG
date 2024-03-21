Algoritmo "Horas Xadrez"
// Disciplina   : [Linguagem e Lógica de Programação em JS]
// Professor   : Jailson
// Descrição   : Horas de uma partida de xadrez
// Autor(a)    : Gerson Lucas Silva Leite
// Data atual  : 21/03/2024
Var
   horaInicio, horaFim, horasPartida:inteiro

Inicio
   Escreva("Digite a hora de inicio da partida: ")
   Leia(horaInicio)
   Escreva("Digite a hora de fim da partida: ")
   Leia(horaFim)



   Se (horaInicio > horaFim) entao
      horasPartida <- 24 - horaInicio + horaFim
      Escreva("Horas de partida: ", horasPartida)
   Senao
        horasPartida <- horaFim + horaInicio
        Escreva("Horas de partida: ", horasPartida)
   Fimse


Fimalgoritmo