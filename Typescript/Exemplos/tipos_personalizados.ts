//let button = document.getElementById('button');
//let valor1 = document.getElementById('input1') as HTMLInputElement;
//let valor2 = document.getElementById('input2') as HTMLInputElement;

type input = number | string;

function somarValores(input1: input, input2:input){
    if(typeof input1 === 'string' ||typeof input2 === 'string'){
        return console.log(`${input1.toString() + input2.toString()}`);
    }

    return console.log(input1+input2);
}

//if(button) {
//    button.addEventListener('click',()=>{
//       if (valor1 && valor2){
//        console.log(somarValores(valor1.value, valor2.value));
//       }
//    })};

  
somarValores(1,2);
somarValores(1,'2');
somarValores('olá',', tudo bem?');
