//###### PROCESSAMENTO SÍNCRONO ######
//Processamento que ocorre em sequência, ou seja, ordenado.

//###### PROCESSAMENTO ASSÍNCRONO ######
//Os processos podem ocorrer ao mesmo tempo.

//###### PROMISES ######
//Uma promise é uma função construtora.
//Pode ser resolvida ou rejeitada.

const minhaPromise = new Promise((resolve, reject) => {
    let condicao = false;
    if(condicao){
        resolve('Resolvido')
    } else {
        reject(Error('Um erro ocorreu na Promise'))
    }
})

const minhaPromise1 = new Promise((resolve, reject) => {
    let condicao = true;
    if(condicao){
        resolve('Resolvido')
    } else {
        reject('Errado')
    }
})

//THEN: Será uma função/callback que será executada quando a promise for resolvida.
//CATCH: Será uma função/callback que será executada quando a promise for rejeitada.
minhaPromise.then((resultado) =>{
    console.log(resultado);
}).catch((error) => {
    console.log(error);
})

minhaPromise1.then((resultado) =>{
    console.log(resultado);
}).catch((error) => {
    console.log(error);
})


