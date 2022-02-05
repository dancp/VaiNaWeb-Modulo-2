//1 - Crie uma condição que exiba uma mensagem no console se estiver a noite, senão, retorne
// no console que ainda não anoiteceu


//2 - Crie uma condição que exiba uma mensagem no console se você for comer lasanha E o mo
//lho for bolonhesa

// let comeuLasanha = true;
// let comeuMolho = true;
// if(comeuLasanha && comeuMolho){
//     console.log("Comeu lasanha e molho bolonhesa")
// }
// else {
//     console.log("Não comeu nada");
// }

//3 - Criar uma condição que exiba uma mensagem no console se você estiver de férias OU estiver Sol

// let ferias = "não";
// let sol = "sol";

// if(ferias == "ferias" || sol == "sol"){
//     console.log("Você está de férias!")
// }
// else{
//     console.log("Está fazendo sol!")
// }




//1 - Criar um loop que conte de 1 até 20 usando FOR que conte os números ímpares

// for(let i = 1; i <= 20; i+=2){
//     console.log(i)
// }

//2 - Criar um loop que conte de 20 até 1 usando WHILE que conte os números pares

// let i = 20
// while(1 <= i){
//     console.log(i)
//     i -=2;
// }




// crie uma função que receba comida como (parâmetro) e exiba no console


// crie uma função que receba um personagem, uma cidade, e uma fruta (parâmetros) e exiba
//no console

// function a(personagem,cidade,fruta){
//     console.log(`O personagem é o ${personagem}, que mora na cidade ${cidade} e gosta de comer a fruta ${fruta}.`)
// }
// a("Homem-aranha","Rio de Janeiro","morango")




// let languages = ["python", "C", "JavaScript", "React", "English", "French"];
// Utilize um método para adicionar dois nomes ao fim do array.
// languages.splice(6,0,"C++","Rust")
// console.log(languages)


// Utilize um método para remover o primeiro nome do array.
// languages.splice(0,1)
// console.log(languages)

// Utilize um método para organizar em ordem alfabética
// console.log(languages.sort())




// // Crie um array chamado "pessoas" contendo ao menos 3 objetos.
// let pessoas = [
//     {},{},{}
// ]

// //Cada objeto deve receber as seguintes propriedades: nome, idade, altura, musicas.
let pessoas = [
    {
        nome:"José",
        idade:23,
        altura:"1,75",
        musicas:["musica01"]
    },
    {
        nome:"Beatriz",
        idade:24,
        altura:"1,65",
        musicas:["musica02"]
    },
    {
        nome:"Solange",
        idade:26,
        altura:"1,60",
        musicas:["musica03"]
    }
]

// Mostre no console uma musica de cada lista
for(let i = 0; i < pessoas.length; i++)
console.log(pessoas[i].musicas)