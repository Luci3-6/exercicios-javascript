// filtrar(lista, fn)
// Retorna um novo array contendo apenas os elementos para os quais fn(item)
// devolve true. É uma implementação manual do método "filter".
const filtrar = (lista, fn) => {
  const resultado = [];          // novo array para armazenar os itens aprovados

  for (const item of lista) {    // percorre cada elemento da lista
    if (fn(item)) {              // verifica se o item atende à condição
      resultado.push(item);      // adiciona ao array final
    }
  }

  return resultado;              // devolve o array filtrado
};

// Teste 1: filtrar números maiores que 10
const numeros = [5, 12, 8, 20, 3];
const maioresQue10 = filtrar(numeros, n => n > 10);
console.log(maioresQue10); // [12, 20]

// Teste 2: filtrar nomes com mais de 4 letras
const nomes = ["ana", "joão", "maria", "luiz"];
const nomesLongos = filtrar(nomes, nome => nome.length > 4);
console.log(nomesLongos); // ["joão", "maria"]