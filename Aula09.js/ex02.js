
const filmes = [
    {
        titulo: "Interestelar",
        genero: "Ficção",
        ano: 2014,
        nota: 9.0
    },
    {
        titulo: "O Poderoso Chefão",
        genero: "Drama",
        ano: 1972,
        nota: 9.2
    },
    {
        titulo: "Vingadores: Ultimato",
        genero: "Ação",
        ano: 2019,
        nota: 8.4
    },
    {
        titulo: "Toy Story",
        genero: "Animação",
        ano: 1995,
        nota: 8.3
    },
    {
        titulo: "Titanic",
        genero: "Romance",
        ano: 1997,
        nota: 7.9
    },
    {
        titulo: "A Origem",
        genero: "Ficção",
        ano: 2010,
        nota: 8.8
    },
    {
        titulo: "Invocação do Mal",
        genero: "Terror",
        ano: 2013,
        nota: 7.5
    }
];

// Comentário:
// O filme de Terror aparece em "Todos" porque essa opção
// mostra todos os filmes do array, sem filtrar por gênero.
// Porém, Terror não aparece nas opções do filtro porque
// os gêneros disponíveis foram definidos previamente e
// Terror não está entre os cinco gêneros conhecidos.
// A cor fica cinza porque o CSS não possui uma regra
// específica para Terror, então ele utiliza a cor padrão.

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Catálogo de Filmes</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>

    <header>
        <h1>Meu Catálogo de Filmes</h1>
        <p>Meus filmes favoritos</p>
    </header>

    <main>
        <section>
            <h2>Filtrar por gênero</h2>

            <select id="filtro">
                <option value="Todos">Todos</option>
                <option value="Ação">Ação</option>
                <option value="Drama">Drama</option>
                <option value="Ficção">Ficção</option>
                <option value="Animação">Animação</option>
                <option value="Romance">Romance</option>
            </select>
        </section>

        <section>
            <h2>Filmes</h2>
            <div id="catalogo"></div>
        </section>

        <section>
            <h2>Estatísticas</h2>
            <div id="estatisticas"></div>
        </section>
    </main>

    <script src="dados.js"></script>
    <script src="app.js"></script>

</body>
</html>
