// ###### OPERADORES DE COMPARAÇÃO ######
// Irá comparar dois valores e retornará um boolean (verdadeiro=True/falso=False).
// Exemplos de Operadores de Comparação:
// Sinal de maior ou menor que (><) -> indica que o valor será maior/menor que...;
// Sinal de maior e igual (>=) -> indica que o valor é maior ou igual que...;
// Sinal de menor e igual (<=) -> indica que o valor é menor ou igual que...;
// Sinal de igual duplo (==) -> indica que os valores são iguais;
// Sinal de exclamação juntamente com o sinal de igual (!=) -> indica que os valores são diferentes de...;
// Sinal de igual triplo (===) -> indica identidade, ou seja, leva em consideração o tipo de dado, se eles são identicos;
// Sinal de exclação juntamente com o sinal de igual duplo (!==) -> indica não idêntico;

const numero1 = 13;
const numero2 = 27;
const numero3 = '31';
const numero4 = 31;

console.log(numero1 > numero2); // false
console.log(numero1 < numero2); // true
console.log(numero1 <= numero2); // true
console.log(numero1 >= numero2); // false
console.log(numero1 == numero2); // false
console.log(numero1 != numero2); // true
console.log(numero1 === numero3); // false
console.log(numero3 == numero4); // true
console.log(numero1 !== numero4); // true



