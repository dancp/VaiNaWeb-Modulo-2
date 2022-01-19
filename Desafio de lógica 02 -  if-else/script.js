//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade = 20
if(idade >= 18) {
    console.log("Você é maior que 18")
}


//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

let humano = true
if(idade > 18 && humano == true){
    console.log("Você é maior de idade e humano")
}


//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let mes = "Setembro"
if(mes == "Janeiro" || mes == "Dezembro"){
    console.log("Você faz aniversário em janeiro ou dezembro")
}
else{
    console.log("Que pena, você não faz aniversário nem em janeiro e nem em dezembro")
}


//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nomeA = "Daniel"
if(nomeA.substring(0,1) === "R"){
    console.log('Seu nome começa com a letra "R"')
}
else{
    console.log('Seu nome não começa com a letra "R"')
}


//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let nomeB = "Daniel"
let sobreNome = "Pontes"
if(sobreNome.length > 6 || nomeB.substring(0,1) === "E"){
    console.log('Seu sobrenome tem mais de 6 letras ou seu nome começa com a letra "E"!')
}
else{
    console.log('Seu sobrenome tem menos de 6 letras ou seu nome não começa com a letra "E"!')
}