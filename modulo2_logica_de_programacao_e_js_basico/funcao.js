// ###### FUNÇÃO ######
// Bloco de código que pode ser executado em um determinado momento.
// A função só é executada quando é chamada.
function minhaPrimeiraFuncao(){
    console.log('Acionou a função.');
}
// Declarando e executando uma função
minhaPrimeiraFuncao();

// As funções podem ter parâmetros e argumentos.
// Parâmetro é o valor, que pode ser variável, passado dentro da função e que, posteriormente, pode ser passado um argumento na execução da função para alterar o valor.

// Parâmetro: message
function primeiraFuncao(message){
    console.log(message);
}
// A palavra 'message' será o argumento que a função irá executar.
primeiraFuncao('Primeira mensagem no JavaScript');
primeiraFuncao('Segunda mensagem no JavaScript');
primeiraFuncao('Terceira mensagem no JavaScript');

// A função pode conter vários parâmetros.
function primeiraFuncaoRealizada(message, userName, email){
    console.log(message, userName, email);
}

primeiraFuncaoRealizada('Primeira mensagem no JavaScript', 'Lucas', 'lucas@contato.com');
primeiraFuncaoRealizada('Segunda mensagem no JavaScript', 'Juliana', 'juliana@contato.com');
primeiraFuncaoRealizada('Terceira mensagem no JavaScript', 'Julia', 'julia@contato.com');

// A função também pode ter um retorno utilizando o return. O return tem que ser a última coisa na função. Pode haver vários return dentro de uma função.
function funcaoRealizada(userName){
    return userName;
}

console.log(funcaoRealizada('Juliana'));

// Utilizando template string no return.
function realizadaFuncao(userName){
    return `${userName} é uma programadora`;
}

console.log(realizadaFuncao('Juliana'));