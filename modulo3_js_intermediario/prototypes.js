//###### PROTOTYPES ######
//É algo diretamente ligado a funções. É a propriedade de funções, onde pode ser criado novos métodos e propriedades dentro dele.
function Game(){
    this.pulou = () => alert('O personagem pulou.');
    this.deitou = () => alert('O personagem deitou.');
}

Game.prototype.correu = () => alert('O personagem correu.');

const novoJogo = new Game();
const meuJogo = 'Fifa';
console.log(novoJogo);
console.log(meuJogo.toUpperCase());
console.log(meuJogo);