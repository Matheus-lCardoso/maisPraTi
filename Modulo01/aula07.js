// Array ou Vetor

let lista_compras = Array();

lista_compras[0] = "Shampoo";
lista_compras[1] = "Condicionador";
lista_compras["x"] = 100;

console.log(lista_compras);

// OU

let listaFrutas = ['Banana', 'Morango'];

console.log(listaFrutas);

// OU

let lista_viagem = Array('Passagens', 'Malas');

console.log(lista_viagem);


//////////////////////////////////////////////////////////////////////////////////////////////////
// Arrays multidimensionais ou Matriz (ter um Array dentro de outro Array)

let lista_coisas = Array();

lista_coisas['Frutas'] = Array();

lista_coisas['Frutas'][0] = "Morango"; 
lista_coisas['Frutas'][1] = "Uva"; 
lista_coisas['Frutas'][2] = "Laranja"; 
lista_coisas['Frutas'][3] = "Bergamota"; 

console.log(lista_coisas);


// Inserção de elementos no final do array (.push) 

lista_coisas['Frutas'].push('Banana');
console.log(lista_coisas); 


// Inserçaõ de lementos no começo do array (.unshift)

lista_coisas['Frutas'].unshift('Limão');
console.log(lista_coisas);


// Exclusão de elementos no final do array

lista_coisas['Frutas'].pop();


// Exclusão de elementos no começo do array

lista_coisas['Frutas'].shift();
console.log(lista_coisas);



//////////////////////////////////////////////////////////////////////////////////////////////////
// Procura de elementos dentro do array (.indexOf)

let listaProdutos = Array('Computador', 'Caneta', 'Chuteira');

let aux = listaProdutos.indexOf('Computador');

if (aux === -1){
    console.log("Elemento não existe no Array");
} else {
    console.log("Elemento existe e está na posição " + aux)
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// Ordena atraves da ordem alfabetica e numeros (.sort())

let listaProdutos01 = Array('Lousa', 'Caneta', 'Chuteira');
console.log(listaProdutos01.sort())

let listaNumeros = Array(1, 3, 2, 4);
console.log(listaNumeros.sort());



//////////////////////////////////////////////////////////////////////////////////////////////////
// Funções

function calcularAreaTerreno(largura, comprimento) {

    let area = largura * comprimento;

    return area;
}

let prompt = require('prompt-sync')();

let lg = prompt("Digite a largura do terreno em metros: ");
let cp = prompt("Digite o comprimento do terreno em metros: ");

// Chamada da função e passagem de parámentros
let resultado = calcularAreaTerreno(lg, cp);

console.log("O terreno possui " + resultado + " metros quadrados");


// Função Anonima

let exibirFuncao = function() {  //o exibirFuncao é uma variável que armazena a função
    console.log('Olá');
}

exibirFuncao();


// Funçaõ CallBack (funções que sao passadas para outras funções)

function exibirArtigo(callbackSucesso, callbackErro) {
    if (true) {
        callbackSucesso('Função de callback em caso de sucesso')
    } else {
        callbackErro('Função de callback em caso de erro')
    }
}

let callbackSucesso = function(titulo) { // ele guarda na variavel a função para chamar depois e executar
    console.log(tituilo)
}

let callbackErro = function(erro) {
    console.log(erro);
}

exibirFuncao(callbackSucesso, callbackErro)


//////////////////////////////////////////////////////////////////////////////////////////////////
// Exemplo do Colega sobre Função


//Global - permite que a variavel seja acessada em qualquer parte do codigo
let variavelGlobal;
let x = 5;
let y = -2;
//Função - apenas dentro da função.
function variavelF (var1, var2){
    let variavelFuncao = var1 + var2 //Função
    return variavelFuncao;
}
variavelGlobal = variavelF(x,y); //Global
//Bloco - variaveis dentro de blocos como if, for, while...
if (variavelGlobal > 0){
    let maior = true //Bloco
    if (maior){
        console.log('OK')
    }
}



//////////////////////////////////////////////////////////////////////////////////////////////////
// Exemplo calculadora

let soma = function(num1, num2) {
    return num1 + num2;
}

let subtracao = function(num1, num2) {
    return num1 - num2;
}

let multiplicacao = function(num1, num2) {
    return num1 * num2;
}

let divisao = function(num1, num2) {
    return num1 / num2;
}

function calculadora(operacao, soma, subtracao, multiplicacao, divisao) {
    switch(operacao) {
        case "soma":
            let resultado03 = soma(num1, num2);
            return resultado;
            break;
    }
}

calculadora("soma", 10, 10, soma);