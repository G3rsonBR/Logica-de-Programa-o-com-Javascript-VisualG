function exercise1() {
  let number1 = parseInt(prompt("Digite um valor: "))
  let number2 = parseInt(prompt("Digite outro valor: "))
  let ehMaior = ""

  if (number1 > number2) ehMaior = `A diferença do maior valor pelo menor é: ${number1 - number2}` 
  else ehMaior = `A diferença do maior valor pelo menor é: ${number2 - number1}` 

  alert(ehMaior)
}

function exercise2() {
  let number = parseInt(prompt('Digite um valor: '))
  let modulo = number < 0 ? number * -1 : number

  alert(`O modulo de ${number} é: ${modulo}`)
}

function exercise4() {
  let number = parseInt(prompt('Digite um valor: '))
  let count = 1

  while (count <= 10) {    
    console.log(`${number} x ${count} = ${number * count}`)
    count++
  } 
}

function exercise5() {
  let count = 1
  let somar = 0

  while (count <= 100) {
    somar += count
    count++
    console.log(somar)
  }
}

function exercise6() {
  let count = 1
  let somados = 0

  while(count <= 500) {
    if (count % 2 == 0) somados += count
    count++
    console.log(somados)
  }
}

function exercise7() {
  let count = 15
  let acumulador = 0
  
  /*
  // Forma 1 de fazer:
  do {
    console.log(count ** 2) 
    count++
  } while (count <= 200)
  */

  // Forma 2 de fazer:
  do {
    acumulador = count
    acumulador *= acumulador
    count++

    console.log(acumulador)
  } while (count <= 200)

}
