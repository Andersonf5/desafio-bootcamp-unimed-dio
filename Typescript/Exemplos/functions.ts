//function somarValoresNumericos(num1: number, num2:number): number  // tipado o tipo de saída da função
//{
//    return num1 + num2;
//} 





function printarValores(num1:number, num2:number):void // tipo que não retona nada para o usuário
 {
    console.log(num1,num2)
}

function somarValoresNumericosETratar(num1: number, num2:number, callback: (numero:number)=>number): number  // tipado o tipo de saída da função
{
    let resultado = num1 + num2;
    return callback(resultado);
} 

function aoQuadrado (valor:number):number{
    return valor * valor;
}

function dividirAoMeio (valor:number):number{
    return valor/2;
}

console.log(somarValoresNumericosETratar(1,3,aoQuadrado));
console.log(somarValoresNumericosETratar(1,3,dividirAoMeio));
