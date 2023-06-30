//###### COOKIES & LOCALSTORAGE & SESSIONSTORAGE ######
//Exemplo 01: Como salvar um dado no LocalStorage.
localStorage.setItem("nome", "Juliana");

//Exemplo 02: Como verificar um dado no LocalStorage.
console.log(localStorage.getItem("nome"));

//Exemplo 03: Com salvar um dado no SessionStorage.
sessionStorage.setItem("nome", "Juliana");

//Exemplo 04: Como verificar um dado no SessionStorage.
console.log(sessionStorage.getItem("nome"));

//Exemplo 05: Como salvar um dado no Cookies.
document.cookie = "nome=Juliana";