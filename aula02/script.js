// Comparações
console.log(3 > 2) //true
console.log(2 > 3) //false


// Operadores de comparação

// =    Atribuição de tipo
    let a = 2
    let b = "2"
    console.log(a, b)


// ==   Verificação de valor
    console.log(b == 2)

// ===  Verificação de tipo e valor
    console.log(a === "2")

// !=   Verifica se os valores comparados são diferentes
    console.log(a != b)

// !==  Verifica se o valor e o tipo comparado é diferente
    console.log(a !== 2)

// >    Maior que
    console.log(a > 0)

// <    Menor que
    console.log(0 < a)

// >=   Maior ou igual
    console.log(a >= 0)

// <=   Menor ou igual
    console.log(a <= 0)



// Estrutura Condicional - if

// if(condicao){
//     console.log("retorno")
// }

let idade = 26

if(idade > 18){
    console.log("Você é maior de idade, está liberado!!")
}

let age = 20
let name = "Tati"
let birthday = 97
let numb = 20

if(age == numb){
    console.log("A saida é true")
}

// Estrutura Condicional - if/else

// if(){
//     console.log("condição verdadeira")

// }

// else {
//     console.log("condição não verdadeira")
// }

let temLuz = true
let isTrue = "acender as luzes"
let isFalse = "aguarde a energia voltar"

if(temLuz == true){
    console.log(isTrue)
}

else {
    console.log(isFalse)
}



// Operadores Lógicos

// && - and - Seu resultado é true se ambos os valores forem verdadeiros.
console.log(true && false)
console.log(true && true)

// || - or - Produz um valor true se qualquer um dos valores for verdadeiro.
console.log(true || false)
console.log(false || false)

// !  - not - Inverte o valor que é dado à ele
let a = 3 > 2
let b = 2 < 3

if(!a == true || b == false){
    console.log("As duas condições são verdadeiras")
}
else {
    console.log("As duas condições são falsas")
}