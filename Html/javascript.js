/*  Criador: Allan
    Calculadora básica com Console.log
*/

function soma(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
soma(1, 20);

function subt(num1, num2){
    var result = num1 - num2;
    console.log(result);
}

function plus(num1, num2, mode=1){
    if(mode == 1){
        var result = num1 * num2;
        console.log(result)
    } else {
        var result = num1 ** num2;
        console.log(result)
    }
}

function divi(num1, num2){
    var result = num1 / num2;
    console.log(result)
}

soma(2, 2);
subt(2, 2);
plus(2, 3, 0);
divi(2, 2);

var lista = ['laranja',
             'maçã',
             'alerta'];

console.log(lista)