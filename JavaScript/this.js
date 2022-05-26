// this com a chamada call informa qual o valor this deve assumir
//
//const pessoa = {
//    nome:"Miguel"
//};
//
//const animal = {
//    nome:"Murphy"
//};
//
//function getSomething() {
//    console.log(this.nome);
//};
//
//getSomething.call(pessoa);
//getSomething.call(animal);


// this sendo chamado por call e passado juntamente com parâmetros

//const  myObj={
//    num1:2,
//    num2:4,
//};
//
//function soma(a,b){
//    console.log(this.num1 + this.num2 + a + b);
//};
//
//soma.call(myObj,1,5);

//const  myObj={
//    num1:2,
//    num2:4,
//};
//
//function soma(a,b){
//    console.log(this.num1 + this.num2 + a + b);
//};
//
//soma.apply(myObj,[1,5]); // Os argumentos no modo de chamada apply são passados dentro de arrays



const retornaNomes = function(){
    return this.nome;
};

let bruno = retornaNomes.bind({nome:"Bruno"});


bruno(); // A chamada com o modo bind é igual a chamada para função





