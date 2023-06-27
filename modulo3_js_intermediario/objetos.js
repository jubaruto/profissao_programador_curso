// ###### OBJETOS ######

const dados = {
    name: 'Juliana',
    age: 37
}

const profissao = {
    category: 'Programadora',
    stack: 'JavaScript'
}

const endereco = {
    city: 'Campos dos Goytacazes',
    state: 'Rio de Janeiro',
    ...dados,
    ...profissao
}

//Exemplo 01 - Object.assign: Serve para inserir os métodos e propriedades de um objeto em outro objeto.
Object.assign(dados, endereco);
console.log(dados);

Object.assign(profissao, dados);
console.log(profissao);

console.log(endereco);

//Exemplo 02 - object.keys: Retorna todas as chaves de um objeto.
console.log(Object.keys(dados));
console.log(Object.keys(profissao));
console.log(Object.keys(endereco));

//Exemplo 03 - object.values: Retorna os valores de um objeto.
console.log(Object.values(dados));
console.log(Object.values(profissao));
console.log(Object.values(endereco));
