const alunos = [
    { nome: "Ana", media: 8 },
    { nome: "Bruno", media: 5 },
    { nome: "Carlos", media: 7 },
    { nome: "Maria", media: 6 },
    { nome: "João", media: 9 }
];

// Array de strings
const nomes = alunos.map(aluno => `${aluno.nome} (${aluno.media})`);

console.log(nomes);

// Array de objetos com situação
const situacoes = alunos.map(aluno => ({
    nome: aluno.nome,
    situacao: aluno.media >= 7 ? "Aprovado" : "Reprovado"
}));

console.log(situacoes);