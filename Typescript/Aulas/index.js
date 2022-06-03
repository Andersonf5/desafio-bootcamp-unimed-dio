"use strict";
//function soma (a: number,b:number) {
//
//    return a + b;
//}
//
//console.log(soma(3,5));
class MeuCachorro {
    constructor(nome, idade, parque) {
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parque;
    }
}
const cao = new MeuCachorro('Apolo', 14, 'Jaqueira');
console.log(cao);
