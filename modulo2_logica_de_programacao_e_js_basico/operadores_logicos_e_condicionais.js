// ###### OPERADORES CONDICIONAIS E LÓGICOS ######
// && -> operador lógico and;
// || -> operador lógico or;
// ! -> operador lógico not.

const idade = 37;
const tipo = 'admin';

if (idade > 30 && tipo == 'admin') {
    console.log('Ele tem mais de 25 anos e é um admin.')
} //Todos os valores precisam ser verdadeiros

if (idade < 30 || tipo == 'admin') {
    console.log('Ele tem mais de 25 anos e é um admin.')
} //Basta somente conter um valor verdadeiro

if (!(idade > 30) && !(tipo == 'admin')) {
    console.log('Ele tem mais de 25 anos e é um admin.')
} //Todos os valores foram negados, nesse caso, nada será retornado

// Pode haver vários else if na confecção do código.
const age1 = 35;
const age2 = 18;
const age3 = 50;

if (age1 > 25) {
    console.log('Ele possui idade maior do que 25 anos.')
} else if(age1 < 25) {
    console.log('Ele não possui idade maior do que 25 anos.')
}

if (age2 > 25) {
    console.log('Ele possui idade maior do que 25 anos.')
} else if(age2 < 25) {
    console.log('Ele não possui idade maior do que 25 anos.')
}

if (age3 == 25) {
    console.log('Ele não possui idade igual a 25 anos.')
} else if(age3 < 25) {
    console.log('Ele não possui idade menor do que 25 anos.')
} else if(age3 == 18) {
    console.log('Ele não possui idade igual a 18 anos.')
} else {
    console.log('Ele possui idade maior do que 25 anos.')
}

//Usando o switch case, ou seja, uma forma melhor para confeccionar o código
const valor1 = 37;

switch (valor1) {
    case 20:
        console.log('Ele possui o valor 20.');
        break;
    case 30:
        console.log('Ele possui o valor 30.');
        break;

    default:
        console.log('Ele não possui nenhum dos valores acima.')
}

const valor2 = 15;

switch (valor2) {
    case 40:
        console.log('Ele possui o valor 40.');
        break;
    case 15:
        console.log('Ele possui o valor 15.');
        break;

    default:
        console.log('Ele não possui nenhum dos valores acima.');
}