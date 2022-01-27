// Crie um objeto que receba ao menos três propriedades sobre você.
let sobre = {
    nome:"Daniel",
    idade: 29,
    cidade: ["Rio de Janeiro"]
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobre.profissao = "UX Designer"

// Remova uma propriedade desse objeto.
delete sobre.cidade

//Mostre no console todas as propriedades desse objeto.
console.log(sobre)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [
    {
        nome:"Paulo",
        idade:"24",
        telefone:"3278-9201",
        amigos:["Carlos", "Joana", "Priscila", "Guilherme"]
    },
    {
        nome:"Beatriz",
        idade:"28",
        telefone:"7678-9243",
        amigos:["Miguel", "Paula", "Henrique", "Tadeu"]
    },
    {
        nome:"Fátima",
        idade:"21",
        telefone:"9178-8754",
        amigos:["Lucas", "Felipe", "Milena", "Bianca"]
    },
    {
        nome:"Marcos",
        idade:"31",
        telefone:"9832-2567",
        amigos:["Bruna", "Rafael", "Suzane", "Mateus"]
    },
    {
        nome:"Paola",
        idade:"19",
        telefone:"9345-6677",
        amigos:["Monique", "Valesca", "Mirela", "Natasha"]
    }
]

// Mostre no console o nome de um amigo de cada lista.
for(let i = 0; i < cadastro.length; i++)
console.log(cadastro[i].amigos[3])