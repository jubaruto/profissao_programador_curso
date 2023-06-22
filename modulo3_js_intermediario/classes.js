//###### CLASSES ######
//As classes são outras maneiras de escrever funções construtoras.
//Pascal Case: em funções construtoras e classes é comum adotar na primeira letra do nome letra maiúscula.
//Exemplo 01
class Pessoa {
    constructor(nome, idade, cidade){
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
        this.estado = 'Rio de Janeiro'
    }

    andou(){
        alert('Ele andou.')
    }

    andou(){
        alert(`${this.nome} andou.`)
    }
}

const pessoa1 = new Pessoa('Juliana', 37, 'Campos dos Goytacazes', this.estado);

//Exemplo 02: Utilizando o static
class Pessoa3 {
    constructor(nome, idade, cidade){
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
        this.estado = 'Rio de Janeiro'
    }

    andou(){
        alert('Ele andou.')
    }

    static andou(){
        alert(`${this.nome} andou.`)
    }
}

const pessoa2 = new Pessoa3('Julia', 35, 'Campos dos Goytacazes', this.estado);

//Exemplo 03
class Mamifero {
    constructor(){
        this.especie = 'Mamífero'
    }

    dormir(){
        alert('Esse mamífero dormiu.')
    }

}

const pessoa4 = new Mamifero('Mike', 4, 'Campos dos Goytacazes', this.estado);

//Quando uma classe é extendida, é necessário "chamar" o método super dentro do construtor.
class Persona extends Mamifero {
    constructor(nome, idade, cidade){
        super();
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
        this.estado = 'Rio de Janeiro'
    }

    dormir(){
        super.dormir();
    }

    andou(){
        alert(`${this.nome} andou.`)
    }
}

const pessoa5 = new Persona('Lucas', 40, 'Niterói', this.estado);

//Exemplo 04
class Felino {
    constructor(patas){
        this.especie = 'Felino'
    }

    dormir(){
        alert('Esse felino dormiu.')
    }

}

const pessoa6 = new Felino('Clara', 8, 'Itaperuna', this.estado);

//Quando uma classe é extendida, é necessário "chamar" o método super dentro do construtor.
class Personagem extends Felino {
    constructor(nome, idade, cidade){
        super(patas);
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
        this.estado = 'Rio de Janeiro'
    }

    dormir(){
        super.dormir();
    }

    andou(){
        alert(`${this.nome} andou.`)
    }
}

const pessoa7 = new Personagem('Guinha', 8, 'Campos dos Goytacazes', this.estado);