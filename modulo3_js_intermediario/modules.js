//###### MODULES ######
//Maneira de dividir o código JS e permitir que arquivos compartilhem o mesmo código JS.
//Utilizado, principalmente para a organização do código e para a separação de responsabilidades.

//Exemplo 01
import { alerta } from './modules2.js';

alerta();

//Exemplo 02
import { alerta, textoAlerta } from './modules2.js';

alerta(textoAlerta);

//Exemplo 03
import alerta from './modules2.js';

alerta();
