//###### NUMBER & MATH & DATE ######

const numero = 13;
const string = '27';
const texto = '31.5'
const numeroQuebrado = 15.24;

//NUMBER
//Exemplo 01: Retorna um número a partir de uma string.
Number.parseFloat(string); // 20

//Exemplo 02: Retorna um número a partir de uma string, podendo definir a casa decimal.
Number.parseInt(texto, 10); // 31

//Exemplo 03: Arredonda um número com base nas casas decimais.
numeroQuebrado.toFixed(); // 16

//Exemplo 04: Retorna uma string a partir de um número.
numero.toString(); // '13'

//MATH
//Objeto nativo do JavaScript que possui métodos e propriedades de expreções matemáticas.
//Exemplo 01: Retorna o valor absoluto, independente se o valor é positivo ou negativo.
Math.abs(13);
Math.abs(-13); // Retornará 13 positivo.

//Exemplo 02: Arredonda o valor para cima.
Math.ceil(13.5); //Retornará 14.

//Exemplo 03: Arredonda o valor para baixo.
Math.floor(27.5); //Retornará 26.

//Exemplo 04: Arredonda para o número mais próximo.
Math.round(31.2); //Arrendondará 31.
Math.round(31.6); //Arredondará 32.

//Exemplo 05: Retorna um número aleatório entre 0 e 1.
console.log((Math.random() * 200).toFixed());

//Exemplo 06: Retorna o maior número dentre os listados.
Math.max(5, 10, 13, 27, 31, 2008); // O maior será o 2008.

//Exemplo 07: Retorna o menor número dentre os listados.
Math.min(5, 10, 13, 27, 31, 2008) // O manor será o 5.

//DATE
const hoje = new Date();

//Exemplo 01: Retornará qual dia é hoje.
hoje.getDate(); //Hoje é dia 26.

//Exemplo 02: Retornará qual é o mês.
hoje.getMonth(); //Nesse momento estamos no mês 06 (junho).

//Exemplo 03: Retornará qual é o ano.
hoje.getFullYear(); //Nesse momento estamos no ano de 2023.

//Exemplo 04: Retornará qual é a hora.
hoje.getHours(); //Nesse momento são 19h.

//Exemplo 05: REtornará quais são os minutos.
hoje.getMinutes();//Nesse momento são 45min.

//Exemplo 06: Retornará qual é o dia da semana em inglês.
hoje.getDay(); //Nesse momento estamos em uma segunda-feira (monday).