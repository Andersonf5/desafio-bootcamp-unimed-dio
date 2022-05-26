


//valor padrão para o parâmetro

//function exponencial(array, num = 1){  //especifica o valor padrão, caso não seja informado
//const result = [];
//
//for (let i = 0; i < array.length; i++ ){
//    result.push(array[i] ** num);
//}
//   return console.log (result);
//};
//
//exponencial([1,2,3,4], 15);
//
//exponencial([1,2,3,4]);

//Objeto "Arguments"

//function findmax(){
//    let max = -Infinity; // garante que podemos enviar valores infinitos sendo positivo ou negativo
//
//    for( let i = 0; i < arguments.length; i++ ){
//       if(arguments[i] > max) {
//           max = arguments[i];
//       }
//       console.log(max);
//    }
//}
//findmax(1,2,3,6,90,1);

//Array como parâmetros (spread informada com ... 3 pontos na chamada da função)

//function sum (x,y,z){
//    return x + y + z
//};
//
//const numbers = [1,2,3];
//
//console.log(sum(...numbers)); //com o spread cada indice do array se torna um elemento independente

//function qtdElementos (...argus){  //Quando utilizado no argumento ... os 3 pontos colocam os parâmetros dentro de um array
//    return console.log(argus);
//}
//
//qtdElementos(1,2,3);

//Object destructuring
// entre chaves podemos filtrar apenas os números que nos interessam

const user = {
id:42,
displayName:'jdoe',
fullName:{
    firstName:'Jonh',
    lastName:'Doe'
}};

function userId({id}) {
    return id;
};

function getFullName({fullName:{firstName:first, lastName:last}}){
    return `${first} ${last}`
}

console.log(userId(user));
console.log(getFullName(user));











