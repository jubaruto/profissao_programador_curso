// ###### FUNCTION DECLARATION ######
// Até o momento estudamos o Function Declaration desta forma:
//Exemplo 01
function teste(){
    console.log('Function Declaration')
}

teste();

//Exemplo 02
function teste2(nome){
    console.log('Function Declaration', nome)
}

teste2('Juliana');

//###### FUNCTION EXPRESSION ######
//Utiliza-se uma variável para confeccionar a função.
//Exemplo 01
const teste3 = function(){
    console.log('Function Expression.')
}

teste3();

//Exemplo 02
const teste4 = function(name){
    console.log('Function Expression.', name)
}

teste4('Juliana');

//###### ARROW FUNCTION ######
//Basicamente outra maneira de escrever funções anônimas.
//Exemplo 01
const teste5 = () => {
    console.log('Arrow Function.')
}

teste5();

//Exemplo 02
const teste6 = (number) => {
    console.log('Arrow Function.', number)
}

teste6(13);
//Exemplo 03: Desta forma é como se estivesse ocorrendo um retorno (return).
const teste7 = () => console.log('Arrow Function.');

teste7();

//Exemplo 04: O parenteses em age pode ou não existir.
const teste8 = age => console.log('Arrow Function.', age);

teste8(37);