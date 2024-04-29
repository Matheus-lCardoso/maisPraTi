// Exercitando Arrays e funções

//////////////////////////////////////////////////////////////////////////////////////////////////
// Exercício 1: Somar todos os elementps de um array.

let elementos = [1, 2, 3, 4];

function somarElementos(vetor) {  //vetor pode ser trocado por um x, pode ter qualquer nome. vetor(passagem pde paramentro popr valor)
    let soma = 0;
    for(let i = 0; i <vetor.length; i++) {
        soma += vetor[i] // i posição ou indice
    }
    return soma;
}

console.log("A soma dos elementos é: ", somarElementos(elementos));


//////////////////////////////////////////////////////////////////////////////////////////////////
// Exercicio 2: Encontrar o maior numero em um Array

function maiorNumero(vetor) {
    let maior = vetor[0]
    for(let i = 1; i < vetor.length; i++) {  //o seria posição 0 com o = ja compara com o 10 (posição 1)
        if(vetor[i] > maior) {
            maior = vetor[i]
        }
    }
    return maior;
}

console.log("O elementos maior é: ", maiorNumero([1, 10, 100, 70]));


//////////////////////////////////////////////////////////////////////////////////////////////////
// Exercicio 3: Reverter um array

function reverterArray(vetor) {
    let vetorResultado = []
    for (let i = vetor.length - 1; i >= 0; i--) {
        vetorResultado.push(vetor[i]);
    }
    return vetorResultado
}

console.log("O vetor invertido é: ", reverterArray([1, 2, 3, 4]));


//////////////////////////////////////////////////////////////////////////////////////////////////
//Exercício 4: somar todos elementos de uma matriz

function somarMatriz(matriz) { //ali no i ele percorre as linhas e no j as colunas?
    let soma = 0
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

console.log("A soma dos elementos contidos na nossa matriz é: ", somarMatriz([[1, 2], [3, 4]]));


//////////////////////////////////////////////////////////////////////////////////////////////////
// Exercicio 5: Encontrar o maior numero em uma matriz

function maiorNumeroM(matriz) {
    let maiorM = matriz[0]
    for(let i = 1; i < matriz.length; i++) {  
        if(matriz[i] > maiorM) {
            maiorM = matriz[i]
        }
    }
    return maiorM;
}

console.log("O elemento maior da matriz é: ", maiorNumeroM([[1, 2], [3, 4]]));

// ou

function maiorNumeroMatriz(matriz){
    let maior = matriz[0][0]
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > maior){
            maior = matriz[i][j];
            }
        }
    }
    return maior;
}

console.log("O maior número da minha matriz é: ", maiorNumeroMatriz([[1, 2], [3, 4]]));


//Funções avançadas: String

/*
    String é considerado um valor primitivo, porém, ao ser interpretado o JS converte em objetos,
    possuindo propriedades e métodos
*/

console.log("Matheus Cardoso".length); //jeito de contar string
console.log("Matheus Cardoso".charAt(7)); //procura qual letra esta na posicao 7

let nome = 'Matheus';
console.log(nome.indexOf('a')); //identifica a posicao (somente a primeira aparição)

console.log(nome);
console.log(nome.replace('Matheus', "Ele")); // ele procura a string e substitui
console.log(nome.substr('2', '4')); // ele so pega um trecho da string

// console.log(nome.toLocaleUpperCaseocaleUpp()); // Coloca a String em letras maiusculas
// console.log(nome.toLocaleLowerCase()); // Coloca a String em letras minusculas


//Funções avançadas: Matemática

let x = Math.ceil(10,100); // arredonda para cima
console.log(x)

let y = Math.floor(10,100); // arredonda para baixo
console.log(y)

let z = Math.round(10,100); // arredonda para cima acima de 0.6 e aredonda para baixo quando é 0.5
console.log(z)

let a = Math.random(); // gera um numero aleatorio entre 0 e 1
console.log(a)


//Funções avançadas: Datas

let data = new Date();  //ou Date()

console.log(data.getDate()); // mostrar o dia de hoje
console.log(data.getMonth() + 1); // mostrar o mes 
console.log(data.getFullYear()); // mostrar o ano
console.log(data.toString()); // retorna um data, hora, dia...
console.log(data.getDate() + 720); // soma + 720 dias
console.log(data.getTime()); // retorna o tempo 'mileseundos'


// exercicio data

let dataExer = new Date();

console.log(dataExer.getDate(), dataExer.getMonth() + 1, dataExer.getFullYear());


let data01 = new Date().toLocaleDateString('pt-BR');

console.log(data01);

