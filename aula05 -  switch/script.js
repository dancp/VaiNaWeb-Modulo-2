// function identificador(){
//     console.log("Hoje é sexta-feira!!")
// }
// identificador()


// function oi(nome, idade){
//     console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)
// }
// oi("Bianca", 18)
// oi("Samuel", 22)



// Função com return

// function mult(y){
//     return y * 2
// }
// console.log(mult(50))

// function soma(x, z){
//     return x + z
// }
// // console.log(soma(5, 10))
// let result = soma(5,10)
// console.log(result)


/*
//criar uma função que exibe uma mensagem no console
function a(){
    console.log(`Uma mensagem`)
}
a()

//criar uma função que recebe um nome como parâmetro e o exiba no console
 function x(nome){
     console.log(`Meu nome é ${nome}`)
 }
 x("Daniel")

//criar uma função que receba seu nome, profissão, e cidade como parâmetros e exiba uma mensagem no console
function y(nome, prof, cidade){
    console.log(`Meu nome é ${nome}, sou ${prof} e moro em ${cidade}.`)
}
y("Daniel", "UX Designer", "Rio de Janeiro")
*/



// Switch

/*
let dia = 5
if(dia === 0){
    console.log("Domingo")
}
else if(dia === 1){
    console.log("Segunda-feira")
}
else if(dia === 2){
    console.log("Terça-feira")
}
else if(dia === 3){
    console.log("Quarta-feira")
}
else if(dia === 4){
    console.log("Quinta-feira")
}
else if(dia === 5){
    console.log("Sexta-feira")
}
else if(dia === 6){
    console.log("Sábado")
}
else{
    console.log("Dia Inválido")
}
*/

/*
switch (expressão){
    case valor1:
        break;
        default:
            break;
}
*/

/*
let dia = 5
switch (dia){
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda-feira")
        break;
    case 2:
        console.log("Terça-feira")
        break;
    case 3:
        console.log("Quarta-feira")
        break;
    case 4:
        console.log("Quinta-feira")
        break;
    case 5:
        console.log("Sexta-feira")
        break;
    case 6:
        console.log("Sábado")
        break;
        default:
        console.log("Dia Inválido")
}
*/

// ### **Exercício 1:**

// Crie uma variável chamada “food”. Esta variável deve receber uma string com o nome de uma comida. Após, crie uma estrutura condicional switch que receba esta variável e que possua três casos: caso lasanha, retorne no console: “Não vendemos esta comida aqui”. Caso pizza, retorne: “Estamos com escassez de pizza” e caso salada, retorne: “Aqui está, são 3 reais”. Teste com estas três opções e verifique o console do seu navegador. Crie também um default, que retornará uma mensagem de erro no console.

let comida = "salada"
switch (comida){
    case "lasanha":
        console.log('Não vendemos esta comida aqui')
        break;
    case "pizza":
        console.log('Estamos com escassez de pizza')
        break;
    case "salada":
        console.log('Aqui está, são 3 reais')
        break;
    default:
        console.log('Erro')
}


// Uma pessoa decidiu ir à uma revenda comprar um perfume. Ele deseja comprar um perfume amadeirado, e a revenda possui, além de perfumes amadeirados, florais, cítrico e frutal. Utilizando uma estrutura switch/case, caso o comprador queira o floral, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza que não prefere outro aroma?”. Caso seja especificado um aroma que não está disponível, retorne no console: “Não trabalhamos com este tipo de perfume aqui”.

let perfume = "amadeirado"
switch (perfume){
    case "amadeirado":
        console.log('Tem certeza que não prefere outro aroma?')
        break;
    case "floral":
        console.log('Compra efetuada com sucesso')
        break;
    case "cítrico":
        console.log('Tem certeza que não prefere outro aroma?')
        break;
    case "frutal":
        console.log('Tem certeza que não prefere outro aroma?')
        break;
    default:
        console.log('Não trabalhamos com este tipo de perfume aqui')
}