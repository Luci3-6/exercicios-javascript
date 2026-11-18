<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Boletim dos Alunos</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>

    <h1>Boletim dos Alunos</h1>

    <ul id="lista-alunos"></ul>

    <script src="script.js"></script>
</body>
</html>
const alunos = [
    { nome: "Ana", media: 8 },
    { nome: "Bruno", media: 5 },
    { nome: "Carla", media: 6 },
    { nome: "Carlos", media: 7 },
    { nome: "Maria", media: 3 }
];

const lista = document.getElementById("lista-alunos");

alunos.forEach(aluno => {

    const item = document.createElement("li");

    const situacao = aluno.media >= 7
        ? "Aprovado"
        : "Reprovado";

    item.textContent = `${aluno.nome} — Média: ${aluno.media} — ${situacao}`;

    if (aluno.media >= 7) {
        item.classList.add("aprovado");
    } else {
        item.classList.add("reprovado");
    }

    lista.appendChild(item);
});