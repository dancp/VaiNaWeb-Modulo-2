//1 - crie uma função que exiba uma mensagem no console
function a(){
    console.log('Mensagem.')
}
a()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function b(meuNome){
    console.log(`Meu nome é ${meuNome}.`)
}
b("Daniel")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function c(nome,idade,estilo){
    console.log(`Meu nome é ${nome}, tenho ${idade} anos e meu gênero musical preferido é ${estilo}.`)
}
c("Daniel",29,"MPB")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function d(filme,musica){
    console.log(`O filme escolhido foi "${filme}" e a música escolhida foi "${musica}".`)
}
d("Homem-Aranha","Por Supuesto")


//Bônus:
//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function x(numero){
    return numero*3
}
console.log('O triplo do número escolhido é', x(50),'.')