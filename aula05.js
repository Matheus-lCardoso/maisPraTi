// EXERCÍCIO 01: PAR OU ÍMPAR

/*
const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite algum número: "));
console.log("O número que você digitou é: ", numero);

if (numero % 2 === 0 ) {
    console.log("O número digitado é par!")
} else {
    console.log("O número digitado é ímpar!")
}

*/


/*   OPERADOR TERNARIO

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite algum número: "));
console.log("O número que você digitou é: ", numero);

const parImpar = (numero % 2 === 0) ? "Par" : "Impar";
console.log(parImpar);

*/


//////////////////////////////////////////////////////////////////////////////////////////////////
// EXERCÍCIO 02: MAIOR DE DOIS NÚMEROS

/*
const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Digite algum número: "));
let num2 = parseInt(prompt('Digite outro número: '));

if (num1 > num2) {
    console.log("O primeiro número é maior!")
} else if (num2 > num1) {
    console.log("O segundo número é maior!")
} else {
    console.log("Os números são iguais!")
}
*/


//////////////////////////////////////////////////////////////////////////////////////////////////
// EXERCÍCIO 3: 

/*
const prompt = require('prompt-sync')();

let lado1 = parseInt(prompt("Insira o comprimento do lado: "));
let lado2 = parseInt(prompt("Insira o comprimento do lado: "));
let lado3 = parseInt(prompt("Insira o comprimento do lado: "));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    console.log("É possível formar um triângulo com essas medidas!");
} else {
    console.log("Não é possível formar um triândulo");
}
*/


//////////////////////////////////////////////////////////////////////////////////////////////////
//EXERCÍCIO 4: Calculadora Simples

/*
const prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite um número: "));
let operacao = prompt("Insira a operação desejada (+, -, /, *): ");

let resultado;

if (operacao === '+') {
    resultado = num1 + num2;
} else if (operacao === '-') {
    resultado = num1 - num2;
}else if (operacao === '*') {
        resultado = num1 * num2;
} else if (operacao === '/') {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        console.log("Erro; divisão por zero!");
        resultado = undefined;
    }
    
} else {
    console.log("Operação inválida!");
}

if (resultado !== undefined) {
    console.log("Resultado: ", resultado);
}

*/


//////////////////////////////////////////////////////////////////////////////////////////////////
// EXERCÍCIO 5: SWITCH CASE

/*
const prompt = require('prompt-sync')();

let dia = parseInt(prompt("Insira um número do dia da semana: "));

let nomeDia;

switch(dia) {
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda-Feira";
        break;
    case 3:
        nomdeDia = "Terça-Feira";
        break;
    case 4:
        nomdeDia = "Quarta-Feira";
        break;
    case 5:
        nomeDia = "Quinta-Feira";
        break;
    case 6:
        nomeDia = "Sexta-Feira";
        break;
    case 7: 
        nomeDia = "Sábado";
        break;
    default:
        console.log("DIgite um número de 1 a 7");
        break
}

console.log("O dia é: ", nomeDia);
*/


//////////////////////////////////////////////////////////////////////////////////////////////////
//EXERCÍCIO 6: CALCULADORA SWITCH CASE

/*
const prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite outro número: "));
let operacao = prompt("Insira a operação desejada (+, -, /, *): ");

let resultado;

switch(operacao) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        case num2 !== 0: 
            resultado = num1 / num2;
}

console.log(resultado);

*/


//////////////////////////////////////////////////////////////////////////////////////////////////
// ESTRUTURA DE REPETIÇÃO: FOR

/*
let contador = 0;
let mult = 5;

//   <Variavel>;  <Condiçaõ>;    <Incremento>
for (contador = 0; contador <= 10; contador++) {
    console.log(` ${mult} * ${contador} =`, mult * contador);
}

// OU

for (let cont = 0; cont <=10; cont++) {
    console.log(cont);
}

// PAR

for (let i = 0; i <= 100; i+=2) {
    console.log(i);
}

// Outro

let soma = 0;
for (let o = 0; o <= 10; o++) {
    soma += o;
}
console.log(soma);


// Decrescente

for (let o = 10; o >= 0; o--) {
    console.log(o);
}

*/


//////////////////////////////////////////////////////////////////////////////////////////////////
// ESTRUTURA DE REPETIÇÃO: WHILE

/*
let i = 10;

while(i >= 1){
    console.log(i);
    i--;
}

//Imprimir os multiplos de 5 menores que 100

let o = 5;

while(o <= 100){
    console.log(o);
    o += 5;
}


//Calcular a soma dos numeros de 1 a 1000

let n = 0;
let soma = 0;

while(n <= 1000){
    soma += n;
    n++;
}
console.log(soma);
*/



//////////////////////////////////////////////////////////////////////////////////////////////////
// ESTRUTURA DE REPETIÇÃO: DO WHILE


// const prompt = require('prompt-sync')();

// let senha;

// do {
//     senha = prompt("Digite a senha: ");
// } while (senha !== "1234")

// console.log("Senha Correta")


//Pedir ao usuario para adivinhar um numero entre 1 e 10

/*
const prompt = require('prompt-sync')();

const numeroCorreto = (Math.floor(Math.random() * 10));
console.log(numeroCorreto);
let tentativa;

do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 10: "))
    if (tentativa < numeroCorreto){
        console.log("Tente um número maior");
    } else if (tentativa > numeroCorreto) {
        console.log("Tente um número menor")    
    }    
} while (tentativa != numeroCorreto)

console.log("Parabens! Você acertou");

*/