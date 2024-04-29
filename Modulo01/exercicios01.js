//////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    Exercício número 1: Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
    valor correspondente em graus Fahrenheit.
*/

console.log("Atividade número 1: ");

const prompt = require('prompt-sync')();

let temperatura = Number(prompt("Digite a temperatura em grau Celsius: "));
let resultado01 = (temperatura * 1.8) + 32;

console.log(resultado01, "ºF");



//////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    Exercício número 2: Escreva um algoritmo para ler o número de eleitores de um município, o número de
    votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
    em relação ao total de eleitores.
*/

console.log("Atividade número 2: ");

let numEleitores = Number(prompt("Digite a quantidade de Eleitores: "));
let votosBrancos = Number(prompt("Digite a quantidade de votos Brancos: "));
let votosNulos = Number(prompt("Digite a quantidade de votos Nulos: "));
let votosValidos = Number(prompt("Digite a quantidade de votos Validos: "));

let resulBrancos = (votosBrancos * 100) / numEleitores;
let resulNulos = (votosNulos * 100) / numEleitores;
let resulValidos = (votosValidos * 100) / numEleitores;

console.log("Percentual de votos Brancos: ", resulBrancos, "%");
console.log("Percentual de votos Nulos: ", resulNulos, "%");
console.log("Percentual de votos Validos: ", resulValidos, "%");



//////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    Exercício número 3: Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
    ● Some 25 ao primeiro inteiro;
    ● Triplique o valor do segundo inteiro;
    ● Modifique o valor do terceiro inteiro para 12% do valor original;
    ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
    dos primeiros três inteiros.
*/

console.log("Atividade número 3: ");

let num01 = parseInt(prompt("Digite um número: "));
let num02 = parseInt(prompt("Digite outro número: "));
let num03 = parseInt(prompt("Digite outro número: "));

let resulNum01 = num01 + 25;
let resulNum02 = num02 * 3;
let resulNum03 = (12 / 100) * num03;
let resulNum04 = num01 + num02 + num03;

console.log("O primeiro valor digitado + 25 é igual a: ", resulNum01);
console.log("O segundo valor digitado triplicado é igual a: ", resulNum02);
console.log("12% do terceiro valor digitado é igual a: ", resulNum03);
console.log("A soma dos três primeiros números são:: ", resulNum04);



//////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    Exercício número 4: Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
    calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
    aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
    aprovação).
*/

console.log("Atividade número 4: ");

let aval01 = Number(prompt("Digite sua primeira nota: "));
let aval02 = Number(prompt("Digite sua segunda nota:"));

let resulAval = (aval01 + aval02) / 2;

console.log("Sua nota é: ", resulAval);

if (resulAval >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado.");
} 



//////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    Exercício número 5: Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
    média calculada seja menor que 6,0
*/

console.log("Atividade número 5: ");

let aval015 = Number(prompt("Digite sua primeira nota: "));
let aval025 = Number(prompt("Digite sua segunda nota:"));

let resulAval01 = (aval015 + aval025) / 2;

console.log("Sua nota é: ", resulAval01);

if (resulAval01 >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado.");
} else {
    console.log("Você foi REPROVADO! Estude mais.");
}

//////////////////////////////////////////////////////////////////////////////////////////////////
/*
    Exercício número 6: Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados 
    fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
    Isósceles, escaleno ou eqüilátero.
    Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
    Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
    Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
    Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

console.log("Atividade número 6: ");

let ladoA = parseInt(prompt("Digite o comprimento do lado: "));
let ladoB = parseInt(prompt("Digite o comprimento do lado: "));
let ladoC = parseInt(prompt("Digite o comprimento do lado: "));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    console.log("É possível formar um triângulo com essas medidas!");
    if ((ladoA = ladoB) || (ladoA = ladoC) || (ladoB = ladoC)) {
        console.log("Triângulo Isósceles!")
    } else if ((ladoA != ladoB) && (ladoB != ladoC)) {
        console.log("Triângulo Escaleno!");
    } else if ((ladoA = ladoB) && (ladoB = ladoC)) {
        console.log();
    }
} else {
    console.log("Não é possível formar um triângulo!")
}



//////////////////////////////////////////////////////////////////////////////////////////////////
/*
    Exercício número 7: As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
    forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra.
*/

console.log("Atividade número 7: ");

let qntd = parseInt(prompt("Digite a quantidade de maças que você quer levar: "));
let resulMaca1 = (qntd * 0.25).toFixed(2);
let resulMaca2 = (qntd * 0.30).toFixed(2);

if (qntd >= 12) {
    console.log("O valor a ser pago a cada maçã será de R$ 0,25 e o valor fica em: R$ ", resulMaca1);
} else {
    console.log("O valor a ser pago a cada maçã será de R$ 0,30 e o valor fica em: R$ ", resulMaca2)
}



//////////////////////////////////////////////////////////////////////////////////////////////////
/*
    Exercício número 8: Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
    e escreve-los em ordem crescente.
*/

console.log("Atividade número 8: ");

let numero01 = Number(prompt("Insira um número: "));
let numero02 = Number(prompt("Insira um número: ")); 

if (numero01 === numero02) {
    console.log("Os números são iguais, tente novamente, digite números diferentes!");
} else {
    if (numero01 < numero02) {
        console.log(numero01, numero02)
    } else {    
        console.log(numero02, numero01)
    }
}



//////////////////////////////////////////////////////////////////////////////////////////////////
/*
    Exercício número 9: Escreva um algoritmo que leia o código de origem de um produto e imprima a região
    do mesmo, conforme a tabela abaixo:
    1 - Sul
    2 - Norte
    3 - Leste
    4 - Oeste
    5 ou 6 - Nordeste
    7,8 ou 9 - Sudeste
    10 até 20 - Centro-Oeste
    25 até 50 - Nordeste
    Fora dos intervalos - Produto importado
*/

console.log("Atividade número 9: ");

let regiao = parseInt(prompt("Digite o código de origem: "));

if (regiao === 1) {
    console.log("Código do produto é de origem da regiâo Sul!");
} else if (regiao === 2) {
    console.log("Código do produto é de origem da regiâo Norte!");
} else if (regiao === 3) {
    console.log("Código do produto é de origem da regiâo Leste!");
} else if (regiao === 4) {
    console.log("Código do produto é de origem da regiâo Oeste!");
} else if (regiao >= 5 && regiao <= 6) {
    console.log("Código do produto é de origem da regiâo Nordeste!");
} else if (regiao >= 7 && regiao <= 9) {
    console.log("Código do produto é de origem da regiâo Sudeste!");
} else if (regiao >= 10 && regiao <= 20) {
    console.log("Código do produto é de origem da regiâo Centro-Oeste!");
} else if (regiao >= 25 && regiao <= 50) {
    console.log("Código do produto é de origem da regiâo Nordeste!");
} else {
    console.log("Código do produto é de origem Importada!");
}



//////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    Exercício número 10: Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

console.log("Atividade número 10: ");

let repetir = parseInt(prompt("Digite um número: "));

for (let i = 0; i < 10; i++) {
    console.log(repetir);
}



//////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    Exercício número 11: Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
    cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PARou ÍMPAR. O algoritmo 
    será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.
*/

// console.log("Atividade número 11: ");

let parEimpar = 1;

while (parEimpar > 0) {
    parEimpar = parseInt(prompt("Digite um número: "));

    if (parEimpar <= 0) {
        console.log("Programa encerrado.");
        break;
    }

    if (parEimpar % 2 === 0) {
        console.log(parEimpar + " é PAR.");
    } else {
        console.log(parEimpar + " é ÍMPAR!");
    }
}



//////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    Exercício número 12: Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
    divididos por 11, dão resto igual a 5.
*/

console.log("Atividade número 12: ");

for (let numerosG = 1000; numerosG < 2000; numerosG++) {
    if (numerosG % 11 === 5) {
        console.log("Os numeros são: " + numerosG);
    }
}



//////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    Exercício número 13: Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
    calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
    1 x N = N
    2 x N = 2N
    3 x N = 3N
*/

console.log("Atividade número 13: ");

let n;

for(let i = 1; i <= 5; i++) {
     n = parseInt(prompt('Digite um número: '));
     for(let j = 1; j <= n; j++) {
         console.log(j, "x", n, "=", (j * n));
    }
}



//////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    Exercício número 14: Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
    a média aritmética desses números.
*/

console.log("Atividade número 14: ");

let soma = 0;
let quantidade = 0;

while (true) {
    let numero = Number(prompt("Digite um número decimal: "));
    
    if (numero === 0) {
        break;
    }
    
    soma += numero;
    quantidade++;
}

if (quantidade > 0) {
    let media = soma / quantidade;
    console.log("A média dos números digitados é: " + media);
} else {
    console.log("Sem média.");
}



//////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    Exercício número 15: Fazer um algoritmos para receber um número decimal e o peso de cada número até
    que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
    respectivos.
*/

console.log("Atividade número 15: ");

let totalDaMedia = 0;
let totalDoPeso = 0;

while (true) {
    let numeroDecimal = Number(prompt("Digite um número decimal: "));
        
     if (numeroDecimal === 0) {
        console.log("Programa encerrado, número!"); 
        break;
    }   

    let pesoPonderada = Number(prompt("Digite o peso: "));
    if (pesoPonderada === 0) {
        console.log("Programa encerrado, peso!");
        break;
    }

    totalDaMedia = totalDaMedia + numeroDecimal * pesoPonderada
    totalDoPeso += pesoPonderada
}

    let mediaTotal = totalDaMedia / totalDoPeso;

    if (isNaN(mediaTotal)) {
        console.log("Inválido!");
    } else {
        console.log("O resultado da média ponderada é: ", mediaTotal)
    }



//////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    Exercício número 16: Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
    Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

console.log("Atividade número 16: "); 

let primeiros = 0;
let primo = 101; 

while (primeiros < 50) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(primo); i++) {
        if (primo % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(primo);
        primeiros++;
    }
    primo++;
}