"use strict";
//const animal: {nome:string, caracteristica:string, corOlhos:string, idade:number} = {
//    nome:"sky",
//    caracteristica:"branquinha",
//    corOlhos: "azul",
//    idade:0.6
//}
var profissaoOpcoes;
(function (profissaoOpcoes) {
    profissaoOpcoes[profissaoOpcoes["Professora"] = 0] = "Professora";
    profissaoOpcoes[profissaoOpcoes["Desenvolvedor"] = 1] = "Desenvolvedor";
    profissaoOpcoes[profissaoOpcoes["Atriz"] = 2] = "Atriz";
    profissaoOpcoes[profissaoOpcoes["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(profissaoOpcoes || (profissaoOpcoes = {}));
const emilia = {
    nome: 'Emilia',
    idade: 25,
    caracteristica: "Linda",
    corOlhos: 'Castanhos',
    profissao: profissaoOpcoes.JogadoraDeFutebol
};
const anderson = {
    nome: 'Anderson',
    idade: 33,
    caracteristica: "habilidoso",
    corOlhos: 'castanhos',
    profissao: profissaoOpcoes.Desenvolvedor,
    preferencias: ['Assistir filmes', 'viajar']
};
function exibir(obj) {
    console.log(obj);
}
exibir(anderson);
