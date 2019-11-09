/*  Criador: Allan
    Somente para aprendizado
*/

function soma(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
soma(1, 20);

function exibeAlgo(texto='Default'){
    console.log(texto);
    alert('Teste');
}
console.log('teste LOG');
setTimeout(exibeAlgo, 5000);
exibeAlgo()
exibeAlgo('Não é default')