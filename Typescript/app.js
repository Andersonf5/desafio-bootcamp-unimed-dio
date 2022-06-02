
const button = document.getElementById('button');
const valor1 = document.getElementById('input1');
const valor2 = document.getElementById('input2');

function exibir(){
    
   return valor1.value+valor2.value
    
    }




button.addEventListener("click", ()=>{
    console.log(exibir());
});