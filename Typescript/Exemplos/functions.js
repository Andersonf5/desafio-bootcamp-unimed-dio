"use strict";
//function somarValoresNumericos(num1: number, num2:number): number  // tipado o tipo de saída da função
//{
//    return num1 + num2;
//} 
function printarValores(num1, num2) {
    console.log(num1, num2);
}
function somarValoresNumericosETratar(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(valor) {
    return valor * valor;
}
function dividirAoMeio(valor) {
    return valor / 2;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirAoMeio));
