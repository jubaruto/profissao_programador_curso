//###### FUNÇÕES ######
//As funções também são criadas com um construtor, o function, por isso ele herda seus métodos e propriedades.

//Exemplo 01 - Propriedades
function retornaNome(nome, idade) {
    console.log(nome, idade, this.profissao, this.cidade)
}

//Exemplo 02 - Length: Retorna a quantidade de parâmetros que a função possui.
// retornaNome.length; // 1
// retornaNome.name; // retornaNome

//Exemplo 03 - Principais Métodos
//Call: Executa a função podendo passar um novo valor para this.
retornaNome.call(null, 'Juliana', 37)
retornaNome.call({profissao: 'Programadora', cidade: 'Campos dos Goytacazes'}, 'Juliana', 37)

//Apply: Executa a função podendo passar um novo valor para this, agora com os argumentos passados em um array.
retornaNome.apply({profissao: 'Programadora', cidade: 'Campos dos Goytacazes'}, ['Juliana', 37])

//Bind: Retorna a função podendo passar um novo valor para this.
const novaFuncao = retornaNome.bind({profissao: 'Programadora', cidade: 'Campos dos Goytacazes'}, 'Juliana', 37)
novaFuncao();

