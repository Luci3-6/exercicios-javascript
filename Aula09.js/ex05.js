// Filtra filmes por década
function filmesDaDecada(lista, decada) {
    return lista.filter(filme =>
        filme.ano >= decada && filme.ano <= decada + 9
    );
}