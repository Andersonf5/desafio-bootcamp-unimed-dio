
//Função autoinvocável armazenada em uma constante e recebendo parâmetros
//
//const soma = (
//    function (a, b){
//        return  a + b;
//    }
//)(1, 2);
//
//console.log(soma);




//função autoinvocável - Dentro de parênteses
//
//(
//    function() {
//        let name = "Digital Innovation One";
//        return console.log(name);
//    }
//)(); //Funçao anônima entre parênteses, seguida por outor par de parênteses, que representa sua chamada.

//função callback - Funções passadas como argumento para outras funções
// Maior controle da ordem das chamadas
const calc = function (operacao,n1, n2){
        return operacao(n1, n2)};

const soma = function (n1, n2){
    return n1+n2};        

const sub = function (n1, n2){
    return n1-n2}; 

const resultSoma = calc(soma,1,2);
const resultSub = calc(sub,1,200);


console.log(resultSoma);
console.log(resultSub);



