let age : number = 33;
let first_name : String = "mauricio";
let isProgramer : boolean = true;
let person : Object = {};

let fruits : Array<String> = ['manzana', 'pera'];
let languajes : String[] = ['java','python'];

//datos especiales
//puede ser de cualquier tipo
let response : any = 'hola';


function saludar2() : void {
    console.log('Hola');
}

//es parecido al any pero no me deja usar metodos o escribir codigo
//como el tipo de dato any. Es muy controlado
let response2 : unknown;

//tipos de datos vacios

//undefined no son inicializadas
//null tiene un valor pero es vacio
let response3 = null;
let response4 = undefined;

//puede tener 2 valores posibles
let response5 : string | undefined;

//en caso de que sea undefined no va a tirar errror
response5?.length;

//podemos crear nuestros tipos de datos
type CustomResponseType = string | undefined;

let responseProduct : CustomResponseType;
let responsePartner : CustomResponseType;

//type ASSERTYON
//castear!

let message : any = '';
(message as string).replace('','hola');

let messageUppercase = (message as string).toUpperCase();
let messageUppercase2 = <string> message;
messageUppercase2.replace('','hola');

const canvas = <HTMLCanvasElement> document.getElementById('canvas');
const canvas2 = document.getElementById('canvas') as HTMLCanvasElement;

