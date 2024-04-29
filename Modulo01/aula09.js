//Objeto

// const pessoa = {
//     nome: "Matheus Cardoso", 
//     idade: 18,
//     profissao: "Desenvolvedor",
//     email: "matheus@teste.com",
//     empregada: true
// }

// console.log(pessoa); //se colocar . depois de pessoa, pode so pegar o nome ou outras coisas dentro do objeto pesssoa

// pessoa.nome = "Joao"

// console.log(pessoa.nome);


// delete pessoa.empregada; //para deletar 
// console.log(pessoa);


// /* 
//     Função Anonima       ("=>" are function, não vinculam os atributos, tema valores proprios
//     (Não consegue pegar os dados de fora))
// */

// pessoa.falar = function() {  
//     return `Meu nome é ${this.nome}, tenho ${this.idade} de idade e sou ${this.profissao}`
// }

// console.log(pessoa.falar());




// //Exercicio

// const ventilador = {
//     liga: true,
//     desliga: false,
//     velocidade1: "Velocidade1",
//     velocidade2: "Velocidade2",
//     velocidade3: "Velocidade3",
// }


//////////////////////////////////////////////////////////////////////////////////////////////////
//  in = posição, of = valor

//FOR IN (para objetos)
// for (let chave in ventilador){
//     console.log(chave + ": " + ventilador[chave]);  
// }                               //não executa funções, interpreta função como String


// //For of (funciona muito melhor com Arrays, Strings)

// let numeros = [10, 20, 30, 100];

// for (let numeros of numero){
//     console.log(numero);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////
/*
    VocÊ tem uma lista de objetos que representam diferentes tipoes de veículos e suas características.
    Seu objetivo é primeiro usar o FOR IN para listar todas as propriedades e valores de cada veículo. Depois,
    utilizar o FOR OF para listas apenas os modelos dos veiculos.
*/

const carro = [
    {
    modelo: "Jetta",
    cor: "Preto",
    ano: 2022,
    },
    {
    modelo: "Civic",
    cor: "Branco",
    ano: 2018,
    },
    {
    modelo: "Azera",
    cor: "Cinza",
    ano: 2015, 
    }
]

for (const chave01 in carro) {
    console.log(carro[chave01]);
}

for (const chave01 of carro) {
    console.log(chave01['modelo']);
}


//////////////////////////////////////////////////////////////////////////////////////////////////
/*
    FOR IN - chave retorna o indice de um array ou o atributo de um objeto
    FOR OF - chave retorna os atributos de um objetos ou os valores de um array
    forEach - quando a ordem é importante de aparição, conseguindo manter a ordem, metode de um array
*/
//////////////////////////////////////////////////////////////////////////////////////////////////

//forEach (metodo especifico de Arrays) 

let cores = ['Azul', 'Preto', 'Branco'];

cores.forEach(function (cor, indice) {
    console.log(indice + ": " + cor)
})


let compras = [];
compras['frutas'] = new Array('banana', 'laranja');

compras['frutas'].forEach(function (value, index) {
    console.log(index + ": " + value)
})


//////////////////////////////////////////////////////////////////////////////////////////////////
/*
    Construa um array de numeros e calcule a soma total dos numeros e tambem imprima cada
    numero multiplicado por dois.
*/

let numer = [1,2,4,5,6,7];
let soma = 0;

numer.forEach( element => {
    soma += element;
    console.log(element*2);
});
console.log("Soma total: " + soma);


//////////////////////////////////////////////////////////////////////////////////////////////////

//ES6

let nome = "Matheus";
let idade = 18;
let sexo = "Masculino"

let objeto = {
    nome,
    idade,
    sexo
}

console.log(objeto);


//////////////////////////////////////////////////////////////////////////////////////////////////
//Design factory (Fabrica de objetos) Design Patterns

let BicicletaFactory = function(cor, tipo, marca) {
    return{
        cor,
        tipo,
        marca
    }
}

let bicicleta1 = BicicletaFactory('Azul', 'Speed', 'Caloi'); 
let bicicleta2 = BicicletaFactory('Preta', 'Mountain', 'BMW'); 

console.log(bicicleta1);
console.log(bicicleta2);

