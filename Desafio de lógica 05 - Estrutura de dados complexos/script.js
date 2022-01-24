// Crie um array que receba 5 itens e exiba no console.
let cores = ["Vermelha", "Laranja", "Amarela", "Verde", "Azul"]
console.log(cores)

// Utilize um método para adicionar um nome ao inicio do array.
cores.splice(0,0,"Violeta")
console.log(cores)

// Utilize um método para remover o último nome do array.
cores.splice(5,1)
console.log(cores)

// Utilize um método para adicionar dois nomes ao fim do array.
cores.splice(5,0,"Rosa","Branco")
console.log(cores)

// Utilize um método para remover o primeiro nome do array.
cores.splice(0,1)
console.log(cores)

// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]
let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers.sort())