//###### CONSTRUCTOR FUNCTION ######
//São funções que irão criar novos objetos com métodos e propriedades.
//Na Factory Function retorna-se um objeto. Na Constructor Function utiliza-se uma função para confeccionar diferentes objetos e não apenas retornar um único objeto.
//Exemplo 01
function Pessoa(){
    this.nome = '';
    this.idade = 0
}

const pessoa1 = new Pessoa();
pessoa1.nome = 'Juliana';
pessoa1.idade = 37

const pessoa2 = new Pessoa();
pessoa2.nome = 'Julia';
pessoa2.idade = 35

//Exemplo 02
function Pessoa(nome){
    this.nome = nome;
    this.idade = 0
}

const pessoa3 = new Pessoa('Juliana');
pessoa3.idade = 37

const pessoa4 = new Pessoa('Julia');
pessoa4.idade = 35

//Exemplo 03
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade
}

const pessoa5 = new Pessoa('Juliana', 37);
const pessoa6 = new Pessoa('Julia', 35);


