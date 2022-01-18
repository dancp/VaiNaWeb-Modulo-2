// Laços de Repetições - Loop //


// Operadores de Atribuição

//   =    atribui um valor
//   +    atribui uma concatenação
//   -    atribui uma subtração
//   *    atribui uma multiplicação
//   /    atribui uma divisão

//   ++   atribui um incremento
//   --   atribui um decremento


// let x = 1
// let y = 2
// console.log(x = x + y) /*completa*/
// console.log(x += y) /*simplificada*/


// Loop While
/*
Estrutura do while
variável = valor
while(condição){
    tarefa
    iteração
}
*/
// let contador = 1
// while(100 >= contador){
//     console.log(contador)
//     contador ++
// }


// Loop For
/*
Estrutura do for
for(variavel contadora; condição; iteração){
    tarefa
}
*/
// for(let i = 1; i <=100; i++){
//     console.log(i)
// }


// Desafio
//Criar um loop que conte todos os números ímpares de 1 até 100 usando for e while

let contador = 1
while(100 >= contador){
    console.log(contador)
    contador +=2 
}

for(let i = 1; i <= 100; i+=2){
    console.log(i)
}