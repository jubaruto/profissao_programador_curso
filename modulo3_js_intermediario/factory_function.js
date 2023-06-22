//###### FACTORY FUNCTION ######
//Irá retornar um objeto quando essa funcção for executada.
const factoryFunction = (name) => {
    return{
        logou: () => alert(`O usuário ${name} logou.`),
        deslogou: () => alert(`O usuário ${name} deslogou.`),
    }
}

factoryFunction('Juliana').logou();
factoryFunction('Juliana').deslogou();