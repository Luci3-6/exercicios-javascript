const alunos = [
    { nome: "Ana", curso: "SI", media: 8, faltas: 2 },
    { nome: "Bruno", curso: "ADS", media: 5, faltas: 6 },
    { nome: "Carla", curso: "SI", media: 6, faltas: 0 },
    { nome: "Carlos", curso: "SI", media: 7, faltas: 4 },
    { nome: "Maria", curso: "SI", media: 3, faltas: 3 },
    { nome: "João", curso: "ADS", media: 9, faltas: 2 }
];

// 1. Média geral apenas dos alunos de SI (filter → reduce)
const mediaSI = alunos
    .filter(aluno => aluno.curso === "SI")
    .reduce((acc, aluno, index, array) => {
        return acc + aluno.media / array.length;
    }, 0);

console.log("Média geral de SI:", mediaSI);

// 2. Nomes dos aprovados em ordem alfabética (filter → map → sort)
const aprovadosOrdenados = alunos
    .filter(aluno => aluno.media >= 7)
    .map(aluno => aluno.nome)
    .sort((a, b) => a.localeCompare(b));

console.log("Aprovados em ordem alfabética:", aprovadosOrdenados);