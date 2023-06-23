//###### ARRAY ######
const array = ['Celta', 'Spin', 'S10', 'Gol', 'Nivus', 'Peugeot', 'Fox', 'CrossFox', 'Idea', 'Yaris'];
const array2 = ['Fiesta', 'Voyage', 'CG150', 'Harley Davison', 'Twister', 'Broz', 'Yamaha', 'Mercedes Bens'];
const array3 = [1, 3, 5, 7, 9, 0, 2, 4, 6, 8];

//Exemplo 01
//length: Mostra a quantidade de itens que há no array.
console.log(array.length);

//Exemplo 02
//unshift: Adiciona um novo item no início do array.
console.log(array.unshift('Fiesta'));

//Exemplo 03
//shift: Remove o primeiro item do array.
console.log(array.shift());

//Exemplo 04
//push: Adiciona um item no final do array.
console.log(array.push('Voyage'));

//Exemplo 05
//pop: Remove o último item do array.
console.log(array.pop());

//Exemplo 06
//from: É um método estático, tendo que utilizar a função Array. Transforma algo parecido com array em array de verdade.
//Array: Iniciando com letra maiúscula, significa estar "chamando" o construtor de array.
//console.log(Array.from());

//Exemplo 07
//isArray: Retorna um boolean, informando se é um array ou não. Também é um método estático.
console.log(Array.isArray('array'));
console.log(Array.isArray(array));

//Exemplo 08
//join: Junta todos os itens da array em uma única string. Por padrão, ele insere vírgula como separador, mas podemos inserir qualquer outro tipo de separador.
console.log(array.join());
console.log(array.join('-'));
console.log(array.join('_'));

//Exemplo 09
//concat: Irá concatenar dois arrays. 
console.log(array.concat(array, array2));
console.log(array.concat(array2));

//Exemplo 10
//of: É um método estático da função construtora. Pegará os itens inseridos, separados por vírgula, e construirá um outro array com os itens mencionados.
console.log(Array.of(1, 2, 3, 4));

//Exemplo 11
//new Array: É como se estivéssemos utilizando a função construtora para construir um novo array.
console.log(new Array(5, 6, 7, 8));

//Exemplo 12
//Array: Também pode utilizar somente o Array, sem o new.
console.log(Array(9, 10, 11, 12));

//Exemplo 13
//includes: Fará uma verificação se o item mencionado existe ou não no array, retornando um boolean.
console.log(array.includes('Mercedes Bens'));
console.log(array2.includes('Mercedes Bens'));

//Exemplo 14
//sort: Ordena os arrays. Caso esteja realizando uma comparação de array numérico, ele ordenará automaticamente o array.
console.log(array3.sort());

//Exemplo 15
//indexOf: Identifica o valor inserido, verifica qual é o primeiro local que ele se apresenta na lista e retornará a posição onde ele está inserido dentro do array.
console.log(array.indexOf('Celta'));
console.log(array2.indexOf('Broz'));
console.log(array3.indexOf(5));

//Exemplo 16
//LastIndexOf: Identifica o valor inserido e passa a última posição que o valor aparece dentro do array.
console.log(array.lastIndexOf('S10'));
console.log(array2.lastIndexOf('Yamaha'));
console.log(array3.lastIndexOf(7));

//Exemplo 17
//reverse: Inverte o array.
console.log(array.reverse());
console.log(array2.reverse());
console.log(array3.reverse());