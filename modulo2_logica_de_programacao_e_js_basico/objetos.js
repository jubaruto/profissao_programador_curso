// ###### OBJETOS ######
// Conjunto de informações composta por chaves {} e valor. Os valores podem ser métodos ou propriedades.
// Métodos são valores em forma de função e Propriedades são valores em qualquer outro formato.
const Juliana = {
    completeName: 'Juliana Aparecida Barbosa Souto',
    age: 37,
    birth: '13/10/1985',
    maritalStatus: 'Casada',
    city: 'Campos dos Goytacazes',
    showMessage: function(){
        alert('Informações relevantes do usuário.')
    },
    state: 'Rio de Janeiro',
    country: 'Brazil'
}

// ###### DOT NOTATION ######
// Acesso aos métodos e propriedades por meio de ponto. 
console.log(Juliana.showMessage());
console.log(Juliana.completeName);
console.log(Juliana.age);
console.log(Juliana.birth);
console.log(Juliana.maritalStatus);
console.log(Juliana.city);
console.log(Juliana.state);
console.log(Juliana.country);

