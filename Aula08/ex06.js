const alunos = [
    { nome: "Ana", media: 8, faltas: 2 },
    { nome: "Bruno", media: 5, faltas: 6 },
    { nome: "Carla", media: 6, faltas: 0 },
    { nome: "Carlos", media: 7, faltas: 4 },
    { nome: "Maria", media: 3, faltas: 3 },
    { nome: "João", media: 9, faltas: 2 }
];

// Gerando o boletim
const boletim = alunos
    .map(aluno => {
        const situacao = aluno.media >= 7 ? "Aprovado" : "Reprovado";

        return `${aluno.nome} — média ${aluno.media} — ${situacao}`;
    })
    .join("\n");

// Imprimindo o boletim completo
console.log(boletim);