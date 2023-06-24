//###### DESESTRUTURAÇÃO DE OBJEITOS ######
//Nova maneira de ter acesso a propriedades e métodos de um objeto e aos itens de um array.
//Exemplo 01
const pessoa = {
    nome: 'Juliana',
    idade: 37,
    cidade: 'Campos dos Goytacazes',
    estado: 'Rio de Janeiro'
}

// console.log(pessoa);

// //Exemplo 02: Utilizando dot notation
// console.log(pessoa.nome);
// console.log(pessoa.idade);
// console.log(pessoa.cidade);
// console.log(pessoa.estado);

// //Exemplo 03
const {nome, idade, cidade, estado} = pessoa;
console.log(nome, idade, cidade, estado);

//Exemplo 04
// const individuo = {
//     nome: 'Julia',
//     idade: 35,
//     endereco: {
//         cidade: 'Campos dos Goytacazes',
//         estado: 'RJ'
//     }
// }

// const {cidade, estado} = individuo.endereco;
// console.log(estado);

// //Exemplo 05
// const {endereco} = individuo;
// console.log(endereco);

//Exemplo 06
// const {endereco:{cidade, estado}} = individuo;
// console.log(cidade);

//Exemplo 07
// const {endereco:{cidade, estado}, endereco} = individuo;
// console.log(cidade, estado);

//###### DESESTRUTURAÇÃO DE ARRAYS ######
//Não pega o valor pelo nome da propriedade ou método. Pega-se pela posição na lista.
//Os Arrays não possuem métodos ou propriedades. O valor é acessado pela posição ocupada em uma lista. 
//Exemplo 01
const carros = ['Celta', 'Spin', 'S10', 'Gol'];
console.log(carros[0]);
console.log(carros[1]);
console.log(carros[2]);
console.log(carros[3]);

//Exemplo 02: Desestruturando o Array
const carro = ['Celta', 'Spin', 'S10', 'Gol'];
const [primeiroCarro, segundoCarro, terceiroCarro, quartoCarro] = carro;
console.log(primeiroCarro, segundoCarro, terceiroCarro, quartoCarro);

//exemplo 03
// const carro = ['Celta', 'Spin', 'S10', 'Gol'];
// const [ , segundoCarro, terceiroCarro] = carro;
// console.log(segundoCarro, terceiroCarro);