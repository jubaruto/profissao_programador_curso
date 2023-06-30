//###### FETCH ######
//É um método nativo do JS, que retorna uma resolução de uma promise, permitindo que requisições HTTP sejam realizadas, ou seja, se é uma promise, pode ser utilizado o than e o catch para interagir com a resposta da requisição.

//HTTP é o principal protocolo de comunicação na web, ou seja, por meio desse protocolo que será possível enviar, receber, deletar ou alterar um determinado valor.

//Adicionar um novo usuário: A partir do Front End o usuário irá inserir suas informações (por meio dos formulários, input, test area, select). Após informações inseridas, as requisições HTTP serão disparadas para o Back End, por meio do Fetch. O Back End receberá os dados e armazenará no banco de dados, assim adicionando um novo usuário.

//Os 5 principais verbos HTTP -> GET, POST, DELETE, PATCH e PUT.

//GET: Quando o usuário solicita algum dado do Back End;
//POST: Quando o usuário envia algum dado para o Back End;
//DELETE: Quando o usuário deseja deletar algum dado específico;
//PATCH: Quando o usuário deseja alterar um dado mais abrangente, ou seja, quando queremos alterar todos os dados de um usuário.
//PUT: Quando o usuário deseja alterar algum dado específico.

//É por meio das requisições que se obtém o CRUD (Create Read Update Delete).
//CRUD: Requisição HTTP. Processo de criar, receber, atualizar ou deletar um dado.

//Endpoint: É uma URL. Serve para estabelecer a comunicação entre Front End e Back End por meio do fetch. O responsável por criar os e denominar a responsabilidade de cada endpoint é o Back End.
//-> Haverá um endpoint para criar um usuário;
//-> Haverá um endpoint para deletar um usuário;
//-> Haverá um endpoint para alterar dados de um usuário e etc.
//O endpoint será utilizado para tudo que demande uma comunicação entre um usuário e o servidor, ou seja, entre um Front End e um Back End.

//Protocolos HTTP: Existem 4 tipos de parâmetros em uma requisição. Eles servem para enviar ou receber um determinado valor. O único que se diferencia um pouco é o Header params.
//Route Params: Utilizado dentro da URL após barras (/). Exemplo: https://github.com/jubaruto/profissao_programador_curso;
//Query params: Utilizado ao final da URL após o ponto de interrogação (?);
//Body params: Utilizado para informar os valores que serão passados no corpo da requisição;
//Header params: São as informações adicionais informadas em uma requisição.

//https://api.coingecko.com/api/v3/exchange_rates

//API (Application Programing Interface): Seria toda a interação por linha de comando ou contrato de serviço entre duas aplicações, ou seja, o Back End.

//CORS: 

//Estatus de resposta HTTP: É através desse estatus que saberemos se a requisição foi bem sucedida, ocorreu erro ou foi redirecionada.
//Estatus de Sucesso -> O número precisa estar entre 200 - 299;
//Estatus de Redirecionamento -> O número precisa estar entre 300 - 399;
//Estatus de Erro no Client (quando a informação é enviada com erro) -> O número precisa estar entre 400 - 499;
//Estatus de erro do Servidor (quando o erro está no Back End, ou seja, no Servidor) -> O número precisa estar entre 500 - 599.

//JSON (JavaScript Object Notation): É um formato de organização dos dados. A diferença do JSON para o Objeto normal do JavaScript é que a chave do objeto deve ser em formato de string. É comum o JSON ser usado como extensão para arquivos, normalmente de configurações. O JSON sempre será inserido dentro de aspas duplas ("") e tem que estar na mesma linha.

//Exemplo 01: Criando a primeira requisição, que por padrão é um GET.
fetch('https://api.coingecko.com/api/v3/exchange_rates', 
{ 
    mode: 'cors', 
    method: 'POST',
    body:{
        name: 'Juliana',
        age: 22,
        city: 'Campos',
        state: 'RJ'
    },
    headers:{

    }
}).then((data) => {
    console.log(data);
})

//Exemplo 02: Formato de Objeto normal e formato de JSON.
const obj = {
    name: 'Juliana',
    age: 37
}

const objt = '{"name": "Juliana", "age": 37}'

console.log(JSON.parse(objt)) //Transforma uma string em formato de JSON em um objeto JavaScript.
console.log(JSON.stringify(obj)) //Transforma um objeto JavaScript em uma string JSON.

//Exemplo 03
fetch('https://api.coingecko.com/api/v3/exchange_rates').then((data) => {
    console.log(data.json().then((json) => {
        console.log(json)
    }))
})