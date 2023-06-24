//###### ARRAYS E INTERADORES ######
//Interar: Repetição de algo, como um loop. Os métodos interadores de array percorrerão por todos os itens do array e executarão um determinado bloco de código, denominado calback, para cada item.
const estoque = ['arroz', 'feijão', 'açúcar', 'batata', 'macarrão', ''];
const precos = [3.50, 5, 2.99, 4, 10.50, 0];
const pessoas = [{nome: 'Juliana', idade: 37}, {nome: 'Julia', idade: 35}];

//Exemplo 01 - forEach: É um método que não tem retorno.
estoque.forEach((valor, index, array) => {
    console.log(valor, index, array);
})

precos.forEach((valor, index, array) => {
    console.log(valor, index, array);
})

pessoas.forEach((valor, index, array) => {
    console.log(valor, index, array);
})

pessoas.forEach((valor, index, array) => {
    console.log(valor.nome, index, array);
})

//Exemplo 02 - map: É um método semelhante ao forEach, mas que possui retorno.
const retornoMap = estoque.map((valor, index, array) => {
    return `${valor} ${index}`;
})

//Exemplo 03 - reduce: Semelhante ao map, sendo a maior diferença é que possui um parâmetro a mais no calback, denominado Acumulador. Esse parâmetro nada mais é do que o retorno, resultado da interação anterior.
const total = precos.reduce((acc, valor, index, array) => {
    return acc + valor
}, 0)

//Exemplo 03 - find: Retorna o valor da primeira interação que for verdadeira.
const resultado = estoque.find((valor, index, array) => {
    return valor;
})

//Exemplo 04 - findIndex: Semelhante ao find, porém ele não retorna o valor. Ele retorna o index do valor.
const resultado2 = estoque.findIndex((valor, index, array) => {
    return valor;
})

//Exemplo 05 - some: Retorna um boolean. O array precisa ter apenas um item para retornar um verdadeiro.
const resultado3 = estoque.some((valor, index, array) => valor);

//Exemplo 06 - every: Retorna um boolean. Se no array houver apenas um item vazio, retornará falso.
const resultado4 = estoque.every((valor, index, array) => valor);

//Exemplo 07 - filter: Retorna um novo array com os itens de cada interação que retornou um verdadeiro.
const resultado5 = estoque.filter((valor, index, array) => valor === 'arroz');

