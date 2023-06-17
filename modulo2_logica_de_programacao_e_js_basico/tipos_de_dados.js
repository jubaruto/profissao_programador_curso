// ###### STRING ######
// String significa texto, ou seja, todo valor que estiver dentro das aspas será identificado pela máquina como texto, mesmo que esse valor seja um número. O texto deve ser escrito dentro de aspas duplas " " ou aspas simples ' '.

const nossaString = "Qualquer coisa escrita";

const outraString = "Qualquer 'coisa' escrita";

const outraNovaString = 'Qualquer "coisa" escrita';

//###### CONCATENAÇÃO ######

const texto = "Juliana é ";
const text = "Programadora.";
console.log(texto + text);
// ou
console.log(texto + ' ' + text);

// ###### TEMPLATE STRING ######
// Como utilizar a template string: Inserir 2 crases, escrever o texto dentro delas, no final do texto, ainda dentro das crases, inserir o símbolo de $ e chaves {}. Detro das chaves {} inserir o valor desejado. Esta forma também é considerado uma concatenação.

console.log(`Você sabia que a Juliana é ${text}`);

// ###### NUMBER ######

const numero = 13e10;

// Para identificar qual tipo de dado está sendo apresentado, utilizamos console.log(typeof e o valor).
console.log(typeof numero, numero);

// ###### NULL ######
// Significa nulo, porém não há ausência de valor.
const valorDaCompra = null;

// ###### UNDERFINED ######
// Diferente do nulo, o undefined não é definido, ou seja, não existe.
let valor;
console.log(typeof valor);

// ###### BOOLEAN ######
// Basicamente refere-se a Verdadeiro (True) ou Falso (False).
const alunoFormado = true;
const estaChovendo = false;

console.log(typeof alunoFormado, alunoFormado);
console.log(typeof estaChovendo, estaChovendo);

// O número zero (0) também pode ser considerado como falso (false).
// O Not a Number (NaN) também pode ser considerado como falso (false).
// O nulo (null) também pode ser considerado como falso (false).
// O undefined também pode ser considerado como falso (false).
// A sitring '' vazia também pode ser considerada com falso (false).
const faltosos = 0;
const faltososAlunos = NaN;
const alunosFaltosos = null;
const alunos = undefined;
const faltososAlunosfaltosos = '';

// A string ' ' com qualquer coisa dentro ou um simples espaço já representa como verdadeiro (true); O espaço conta como caracter.
// Qualquer número, diferente de zero (0), também pode ser considerado como verdadeiro (true);
const presenca = ' ';
const presencaAlunos = 1;

