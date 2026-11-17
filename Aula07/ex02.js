// aplicar(lista, fn)
// Retorna um novo array contendo o resultado de aplicar fn
// a cada elemento da lista. É basicamente um "map" manual.
const aplicar = (lista, fn) => {
  const resultado = [];            // novo array que vamos preencher
  for (const item of lista) {      // percorre cada elemento da lista
    resultado.push(fn(item));      // aplica a função e guarda o retorno
  }
  return resultado;                // devolve o novo array transformado
};

// Teste 1: multiplicar números por 10
const teste1 = aplicar([1, 2, 3], n => n * 10);
console.log(teste1); // [10, 20, 30]

// Teste 2: transformar nomes em maiúsculas
const nomes = ["ana", "joão", "maria"];
const teste2 = aplicar(nomes, nome => nome.toUpperCase());
console.log(teste2); // ["ANA", "JOÃO", "MARIA"]