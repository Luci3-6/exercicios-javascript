const alunos = [
    { nome: "Ana", curso: "SI", media: 8, faltas: 2 },
    { nome: "Bruno", curso: "ADS", media: 5, faltas: 6 },
    { nome: "Carlos", curso: "SI", media: 7, faltas: 4 },
    { nome: "Maria", curso: "SI", media: 6, faltas: 3 },
    { nome: "João", curso: "ADS", media: 9, faltas: 2 },
    { nome: "Pedro", curso: "SI", media: 4, faltas: 8 }
];

// 1. Alunos de SI
const alunosSI = alunos.filter(aluno => aluno.curso === "SI");

console.log("Alunos de SI:", alunosSI);

// 2. Alunos aprovados e com menos de 5 faltas
const aprovados = alunos.filter(aluno =>
    aluno.media >= 7 && aluno.faltas < 5
);

console.log("Aprovados:", aprovados);

// 3. Alunos reprovados (lista de recuperação)
const reprovados = alunos.filter(aluno => aluno.media < 7);

console.log("Reprovados para recuperação:", reprovados);