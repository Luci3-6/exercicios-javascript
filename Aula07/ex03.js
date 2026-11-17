// filtrar(lista, fn)
// Retorna um novo array contendo apenas os elementos da lista
// para os quais a função fn retorna true.
// É basicamente um "filter" implementado manualmente.

const filtrar = (lista, fn) => {
  const resultado = [];            // novo array onde guardaremos os itens aprovados

  for (const item of lista) {      // percorre cada elemento da lista
    if (fn(item)) {                // testa o item usando a função fornecida
      resultado.push(item);        // se passou no teste, adiciona ao resultado
    }
  }

  return resultado;                // devolve apenas os itens filtrados
};

// Teste 1: filtrar números maiores que 10
const numeros = [5, 12, 8, 20, 3];
const maioresQue10 = filtrar(numeros, n => n > 10);
console.log(maioresQue10); // [12, 20]

// Teste 2: filtrar nomes com mais de 4 letras
const nomes = ["ana", "joão", "maria", "luiz"];
const nomesLongos = filtrar(nomes, nome => nome.length > 4);
console.log(nomesLongos); // ["joão", "maria"]