//###### REST E SPREAD ######
//Rest: permite que possamos pegar todos os argumentos dos parâmetros em uma função juntando tudo em um único array, deixando o código com a escrita mais simples.
//Exemplo 01
function estados (rj, sp, es, mg) {
    console.log(rj)
}
estados ('RJ', 'SP', 'ES', 'MG');

//Exemplo 02: Rest
function estados (...estados){
    console.log(estados)
}
estados ('RJ', 'SP', 'ES', 'MG');

//Exemplo 03: Rest
function estados (...estados){
    console.log(estados[2])
}
estados ('RJ', 'SP', 'ES', 'MG');

//Exemplo 04
function estados (rj, ...estados){
    console.log(rj)
}
estados ('RJ', 'SP', 'ES', 'MG');

//Exemplo 05
function estados (rj, ...estados){
    console.log(estados)
}
estados ('RJ', 'SP', 'ES', 'MG');

//Spread: serve para espalhar itens de um determinado array ou objeto em um outro.
//Exemplo 06
const carrosAltos = ['S10', 'Pajero', 'Tracker', 'Corolla Cross'];
const carrosBaixos = ['Celta', 'Gol', 'Nivus', 'Pegeout', 'Yaris'];

const carros = [...carrosAltos, ...carrosBaixos];

//Exemplo 07
const individuo = {
    nome: 'Juliana',
    idade: 37,
    profissao: 'Programadora'
}

const endereco = {
    cidade: 'Campos dos Goytacazes',
    estado: 'RJ'
}

const dados = {
    ...individuo,
    ...endereco,
    altura: 1.50
}