//let button = document.getElementById('button');
//let valor1 = document.getElementById('input1') as HTMLInputElement;
//let valor2 = document.getElementById('input2') as HTMLInputElement;
//
function somaNumeros(num1:number,num2: number){
    return num1 + num2
};


if(button) {
button.addEventListener('click',()=>{
   if (valor1 && valor2){
    console.log(somaNumeros(Number(valor1.value), Number(valor2.value)));
   }
})};