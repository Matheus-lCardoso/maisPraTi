/* 
o método 'log' do objeto 'console', utilizando para imprimir informações no console do navegador ou servidor
*/

let nomeAluno = "Matheus Cardoso";
let nomeProf = "Jaques";
let aula = 4;
apresentacao = "Meu nome é", nomeAluno, "e estou na aula", aula, "do professor", nomeProf;
// Meu nome é Matheus Cardoso e estou na aula 4 do professo Jaques
console.log(apresentacao);


/*
nome = "Matheus"; // Não Recomendado
let nome = "Matheus"; //Declaração Padrão
var name = "Matheus"; //Antiga e Inadequada


const NAME = "Matheus";
*/


/* 
let meuNull = null;
console.log(meuNull);
    "Trata como identifica 'nada'"
*/


/*
let meuNumber = 10.1;
console.log(typeof(meuNumber));
    "Identica a tipagem"
*/


/*
let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);



let numTeste = "5";
let numTeste2 = parseInt(numTeste); //Força que o a "palavra 5(contatenação)" vire um numero inteiro
let numTeste3 = Number(numTeste); //Transforma em numero a escrita

console.log(numTeste + num1); //O resultado vai dar 510 pq ele vai 'somar' a escrita e não os números
console.log(numTeste2 + num1); //Vai fazer a soma noermalmente


let contador = 1;
contador = contador + 1;
console.log(contador);

contador++
console.log(contador);
*/


/*
const passo = 5;

let contador = 0;
contador += passo;
console.log(contador);
*/


/*
console.log(10 < 5);
console.log(10 == "10"); //valor
console.log(10 === "10"); //valor e tipo
*/


/*
console.log((10 > 5) && (10 > 2));
console.log((10 > 5) || (10 > 2));
*/


/*
const usuario = "Jaques";
const senha = "123";

const autenticacao = usuario === "Jaques" && senha === "1235"

console.log(autenticacao);
*/


/*const nota = 50;

if (nota >= 60) {
    console.log("Aprovado");
} else if (nota >= 40 && nota <= 59.9) {
    console.log("Esta de recuperação!");
} else {
    console.log("Reprovado, precisa estudar mais!");
}


const idade = 30;

if ((idade >= 18) && (idade <= 30) ) {
    console.log("Pode participar");
} else {
    console.log("Não pode participar");
}
*/


/**
 * Estrutura de decisão semelhanteb if/else, mas cim sintaxe mais enxuta
 */


/**
 * <condiçao> ? <verdadeiro> : <falso>
 */

let resultadoTernario = (10 < 100) ? true : false
console.log(resultadoTernario);


/*   ENTRADA E SAIDA DE DADOS
const prompt = require('prompt-sync')();

let teste = prompt("Digite aqui seu nome: ");
console.log(teste);
*/

/*
    Teste
*/