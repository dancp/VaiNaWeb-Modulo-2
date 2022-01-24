// Tipos de dados complexos


// Array - []

// Index         0          1          2         3
/*
let alunos = ["Felipe", "Bárbara", "Samuel", "Larissa"]
console.log(alunos[3])

for(let i = 0; alunos.length > i; i++){
    console.log(`O elemento do index ${i} corresponde ao nome ${alunos[i]}`)
}
*/


// arr.sort() - deixa em odem numérica ou alfabética
/*
let numbers = [1,4,3,5,8,9,7,6,2,10]
// console.log(numbers.sort(numbers))
numbers.sort(function(a,b)
{
    return (a-b)
}
)
console.log(numbers)

//arr.reverse() - inverte os elementos
console.log(numbers.reverse())
*/

//arr.unshift() - adiciona um valor no começo da lista
let languages = ["Java", "Python", "C", "JavaScript"]
languages.unshift("JavaScript")
console.log(languages)

//arr.push() - adiciona um valor no final da lista
let frutas = ["Maça", "Manga", "Cajú", "Laranja"]
frutas.push("Mamão", "Melancia")
console.log(frutas)

//arr.shift() - remove o primeiro valor da lista
frutas.shift()
console.log(frutas)

//arr.pop() - remove o último valor da lista
frutas.pop()
console.log(frutas)


//arr.splice(x,y) - remove, adiciona ou substitui um elemento especifico do array

//remover
let nomes = ["Dan", "Pam", "Tati"]
nomes.splice(0,0)
console.log(nomes)

//adicionar
nomes.splice(0,0,"Luan")
console.log(nomes)

//substituir
nomes.splice(1,1,"Ivan")
console.log(nomes)