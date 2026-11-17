const alunos = [
    { nome: "Ana", media: 8, faltas: 2 },
    { nome: "Bruno", media: 5, faltas: 6 },
    { nome: "Carla", media: 6, faltas: 0 },
    { nome: "Carlos", media: 7, faltas: 4 },
    { nome: "Maria", media: 3, faltas: 3 }
];

// 1. Encontre a Carla
const carla = alunos.find(aluno => aluno.nome === "Carla");

console.log("Aluna encontrada:", carla);

// 2. Verifique se existe alguém com zero faltas
const existeZeroFaltas = alunos.some(aluno => aluno.faltas === 0);

console.log("Existe aluno com zero faltas?", existeZeroFaltas);

// 3. Verifique se todos têm média >= 4
const todosMediaQuatro = alunos.every(aluno => aluno.media >= 4);

console.log("Todos têm média >= 4?", todosMediaQuatro);