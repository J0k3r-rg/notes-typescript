var age = 33;
var first_name = "mauricio";
var isProgramer = true;
var person = {};
var fruits = ['manzana', 'pera'];
var languajes = ['java', 'python'];
//datos especiales
//puede ser de cualquier tipo
var response = 'hola';
function saludar2() {
    console.log('Hola');
}
//es parecido al any pero no me deja usar metodos o escribir codigo
//como el tipo de dato any. Es muy controlado
var response2;
//tipos de datos vacios
//undefined no son inicializadas
//null tiene un valor pero es vacio
var response3 = null;
var response4 = undefined;
//puede tener 2 valores posibles
var response5;
//en caso de que sea undefined no va a tirar errror
response5 === null || response5 === void 0 ? void 0 : response5.length;
var responseProduct;
var responsePartner;
//type ASSERTYON
//castear!
var message = '';
message.replace('', 'hola');
var messageUppercase = message.toUpperCase();
var messageUppercase2 = message;
messageUppercase2.replace('', 'hola');
var canvas = document.getElementById('canvas');
var canvas2 = document.getElementById('canvas');
