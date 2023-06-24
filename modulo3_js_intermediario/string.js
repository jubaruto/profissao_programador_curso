//###### STRING ######

const string = 'Linguagem JavaScript ';
const string2 = 'de Programação.';

//Exemplo 01
//length: Retorna a quantidade de carateres que uma string possui. Lembrando que espaço em vranco também é contabilizado como caracter.
console.log(string.length);
console.log(string2.length);

//Exemplo 02
//charAt: Retorna o caracter que está na posição que for passada.
console.log(string.charAt(1));
console.log(string.charAt(0));
console.log(string.charAt(5));

//Exemplo 03
//toLowerCase: Deixa toda a sting com letras minúsculas.
console.log(string.toLowerCase());
console.log(string2.toLowerCase());

//Exemplo 04
//toUpperCase: Deixa toda a string com letras maiúsculas.
console.log(string.toUpperCase());
console.log(string2.toUpperCase());

//Exemplo 05
//endsWith: Retorna um boolean. Verifica se a string termina com os caracter que foi passado.
console.log(string.endsWith('JavaScript'));
console.log(string.endsWith('javascript'));

//Exemplo 06
//startsWith: Retorna um boolean. Verifica se a string começa com o que foi passado.
console.log(string.startsWith('JavaScript'));
console.log(string2.startsWith('de'));

//Exemplo 07
//includes: Retorna um boolean. Verifica se a string que foi informada está contida dentro da string original.
console.log(string.includes('javascript'));
console.log(string2.includes('Programação'));

//Exemplo 08
//concat: Junta as string mencionadas.
console.log(string.concat(string, string2));
console.log(string.concat(string2));
console.log(string + string2);
console.log(`${string}${string2}`);

//Exemplo 09
//substring: Apresenta somente o pedaço da string desejado.
console.log(string.substring(1, 3));
console.log(string2.substring(4, 8));

//Exemplo 10
//slice: Seria também uma substring, com a diferença de que pode ser inserido números negativos.
console.log(string.slice(1 , 3));
console.log(string2.slice(-3));
console.log(string.slice(-8));

//Exemplo 11
//padStart: Aumenta a string, preenchendo-a com o caracter que foi passado no início da string.
console.log(string.padStart(25, '.'));
console.log(string2.padStart(30, '/'));

//Exemplo 12
//padEnd: Aumenta a string, preenchendo-a com o caracter que foi passado no final da string.
console.log(string.padEnd(30, '.'));
console.log(string2.padEnd(30, '/'));

//Exemplo 13
//split: Cortará a string com o padrão que foi passado e construirá um array.
console.log(string.split(' '));
console.log(string2.split(' '));
console.log(string.split('i'));
console.log(string2.split('a'));

//Exemplo 14
//replace: Substitui uma string por outra.
console.log(string.replace('i', 'a'));
console.log(string2.replace('ç', 'c'));