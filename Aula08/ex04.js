const alunos = [
    { nome: "Ana", media: 8, faltas: 2 },
    { nome: "Bruno", media: 5, faltas: 6 },
    { nome: "Carla", media: 6, faltas: 0 },
    { nome: "Carlos", media: 7, faltas: 4 },
    { nome: "Maria", media: 3, faltas: 3 }
];

// 1. Média geral da turma
const somaMedias = alunos.reduce((acc, aluno) => {
    return acc + aluno.media;
}, 0);

const mediaGeral = somaMedias / alunos.length;

console.log("Média geral:", mediaGeral);

// 2. Total de faltas
const totalFaltas = alunos.reduce((acc, aluno) => {
    return acc + aluno.faltas;
}, 0);

console.log("Total de faltas:", totalFaltas);

// 3. Aluno com a maior média
const melhorAluno = alunos.reduce((acc, aluno) => {
    return aluno.media > acc.media ? aluno : acc;
});

console.log("Aluno com maior média:", melhorAluno);