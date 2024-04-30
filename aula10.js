// const professor = {
//     nome: "Tony Stark",
//     materia: "Matematica",
//     notas: {
//         aluno1: 3.5,
//         aluno2: 4.0,
//         aluno3: 2.8 
//     }
// }

// for (let aluno in professor.notas) {
//     let media = (professor.notas.aluno1 + professor.notas.aluno2 + professor.notas.aluno3) / 3;
//     if (media >= 3) {
//         console.log("Turma está acima da média!");
//     } else {
//         console.log("Turma está abaixo da média!");
//     }
// }


// // OU

// for (let aluno in professor.notas) {
//     somaNotas += professor.notas[aluno];
//     numeroDeAlunos++;
// }

// let media = somaNOtas / numeroDeAlunos

// console.log(`A média das notas é ${media.toFixed(2)}.`);
// console.log(media >= 3 ? `A turma do ${professor.nome} está acima da média de aprovação` : `A turma está abaixo da média`); //operador ternario



//////////////////////////////////////////////////////////////////////////////////////////////////

// const biblioteca = [
//     { titulo: '12 Regras para Vida', autor: 'Jordan Peterson', ano: 1925},
//     { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', ano: 1937},
//     { titulo: 'Senhora do Jogo', autor: 'Sidney Sheldon', ano: 2009},
//     { titulo: 'Zé Carioca', autor: 'Disney', ano: 1940},
//     { titulo: 'Nação Dopamina', autor: 'Anna Lembke', ano: 2021},
// ]

// /**
//  * For of para iterar sobre o array biblioteca
//  * Para cada livro, verifique se foi publicado antes de 2000
//  * Imprimir o título e o ano dos livros que atendem essa condição
//  */

// for(let livro of biblioteca) {
//     if (livro.ano < 2000) {
//         console.log(livro.titulo, livro.ano);
//     }
// }



//////////////////////////////////////////////////////////////////////////////////////////////////

const filmes = [
    { titulo: 'Tropa de Elite', genero: 'Ação' },
    { titulo: 'Capitao Fantastico', genero: 'Drama' },
    { titulo: 'O Poderoso Chefão', genero: 'Crime' },
    { titulo: 'Clube de luta', genero: 'Drama' },
    { titulo: 'Oppenheimer', genero: 'Biografia' },
    { titulo: 'High School Musical', genero: 'Musical' },
    { titulo: 'Barbie', genero: 'Live action' },
]

/**
 * Com forEach para iterar, crie um objeto para armazenar a contagem de filmes por gênero.
 * Para cada filme no array, verifique se o gênero já existe no objeto contagem.
 * Se existir, incremente a contagem, se não, adicione o gênero ao objeto com contagem inicial de 1
 * Após loop, imprima cada gênero e o númeor de filmes correspondente
 */

let contagemGeneros = {}

filmes.forEach(filme => {
    if (contagemGeneros[filme.genero]) {
        contagemGeneros[filme.genero]++;
    } else {
        contagemGeneros[filme.genero] = 1
    }
})

for(let genero in contagemGeneros) {
    console.log(`Existem ${contagemGeneros[genero]} filme(s) do gênero ${genero}`);
}


//////////////////////////////////////////////////////////////////////////////////////////////////

/* Pesquisa Binraia  //O(n) //O (log n)
    
    Desenvolvam um algoritmo que seja capaz de receber uma lista, e um valor correto. E execute uma pesquisa
    binária para encontrar o valor certo.

*/

const binarySearch = (list, item) => {
    let low = 0;
    let high = list.lenngth - 1;

    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid]

        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null
}

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 1)) //1



//////////////////////////////////////////////////////////////////////////////////////////////////

/*
    spread = espalhar  (...)
    rest = juntar
*/

let tituloArtigo = "Movimento ágil";

console.log([...tituloArtigo]) //spread
console.log([...tituloArtigo])


// let tituloArtigo = "Movimento ágil";
// console.log(...tituloArtigo); // separa em strings
// console.log([...tituloArtigo]); // separa em array