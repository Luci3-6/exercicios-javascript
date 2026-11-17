// mapear(lista, fn)
// Retorna um novo array onde cada elemento é o resultado de aplicar fn(item)
// em cada item da lista. É basicamente um "map" implementado manualmente.

const mapear = (lista, fn) => {
  const resultado = [];          // novo array para guardar os valores transformados

  for (const item of lista) {    // percorre cada elemento da lista
    const novoValor = fn(item);  // aplica a função de transformação
    resultado.push(novoValor);   // adiciona ao array final
  }

  return resultado;              // devolve o array transformado
};

// Teste 1: dobrar números
const numeros = [1, 2, 3, 4];
const dobrados = mapear(numeros, n => n * 2);
console.log(dobrados); // [2, 4, 6, 8]

// Teste 2: transformar nomes em maiúsculas
const nomes = ["ana", "joão", "maria"];
const nomesMaiusculos = mapear(nomes, nome => nome.toUpperCase());
console.log(nomesMaiusculos); // ["ANA", "JOÃO", "MARIA"]