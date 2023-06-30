//###### ASYNC & AWAIT ######
//Exemplo 01
async function getCoinData(){
    const data = await fetch('https://api.coingecko.com/api/v3/exchange_rates');
    console.log(await data.json());
}

getCoinData();

//Exemplo 02
async function getCoinData(){
    const data = await fetch('https://api.coingecko.com/api/v3/exchange_rates');
    const json = await data.json();
    console.log(json);
}

getCoinData();

//Exemplo 03: Como fazer a veririficação se há erro na requisição.
async function getCoinData(){
    try {
        const data = await fetch('https://api.coingecko.com/api/v3/exchange_rates');
        const json = await data.json();
        console.log(json);
    } catch (error){
        console.log(error);
    }
}

getCoinData();