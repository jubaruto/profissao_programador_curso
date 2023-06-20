// ###### ESTRUTURA DE REPETIÇÃO ######
// Estrutura que permitirá a repetição de um determinado trecho de código em uma determinada quantidade de vezes. Também pode ser chamada de estrutura de loops.
//Muita atenção para não confeccionar loops infinitos, pois eles podem "quebrar" a aplicação e "travar" o computador do usuário.

for (let numero = 0; numero < 5; numero++) {
    console.log(`Repetição de número ${numero}`)
}

for (let valor = 0; valor < 10; valor++) {
    console.log(`Repetição do valor ${valor}`)
}

//FOR IF BREAK
for (let valor1 = 0; valor1 < 50; valor1++) {
    console.log(`Repetição do valor ${valor1}`)
    if(valor1 == 25){
        break
    }
}

for (let valor2 = 0; valor2 <= 15; valor2++) {
    console.log(`Repetição do valor ${valor2}`)
}

//FOR IN
const object = {
    name: 'Juliana',
    age: 37,
    city: 'Campos dos Goytacazes',
    state: 'Rio de Janeiro'
}

for (key in object){
    console.log(key)
}

for (key in object){
    console.log(object[key])
}

//FOR OF
const array = ['celta', 'spin', 's10', 'gol']

for (item of array) {
    console.log(item)
}

//WHILE
let numero1 = 0;

while (numero1 < 5) {
    console.log(numero1);
    numero1++
}