//###### ESCOPOS ######
//Local onde um valor ou uma variável pode ser acessado ou não.
//Para criar variável, utilizar sempre const ou let.
//Não é boa prática declarar uma variável sem utilizar nada, pois acaba criando uma variável global.
//Não é boa prática declarar uma variável utilizando o var.
//Escopo de Bloco.

//Exemplo 01: ESCOPO DE FUNÇÃO - Uma variável criada fora pode ser acessada dentro da função. 
const valor = 'Juliana';

function teste() {
    console.log(valor);
}

//mas se for criada dentro, não poderá ser acessada.
// function teste() {
//     const valor = 'Juliana';
// }

// console.log(valor);

//Exemplo 02: ESCOPO DE BLOCO (IF) - Sempre será utilizado as variáveis const ou let.
// if() {

// }

//Exemplo 03: ESCOPO DE BLOCO (FOR_LOOP) - Sempre será utilizado as variáveis const ou let.
// for() {

// }