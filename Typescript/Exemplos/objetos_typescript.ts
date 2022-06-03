//const animal: {nome:string, caracteristica:string, corOlhos:string, idade:number} = {
//    nome:"sky",
//    caracteristica:"branquinha",
//    corOlhos: "azul",
//    idade:0.6
//}



enum profissaoOpcoes {
    Professora,
    Desenvolvedor,
    Atriz,
    JogadoraDeFutebol
}

interface pessoa {
    nome:string,
    caracteristica:string,
    corOlhos: string,
    idade:number
    profissao:profissaoOpcoes
}

const emilia: pessoa = {
nome:'Emilia',
idade: 25,
caracteristica:"Linda",
corOlhos:'Castanhos',
profissao:profissaoOpcoes.JogadoraDeFutebol

}

interface hobbies extends pessoa {
    preferencias:string[];
}


const anderson: hobbies = {
nome:'Anderson',
idade: 33,
caracteristica:"habilidoso",
corOlhos:'castanhos',
profissao:profissaoOpcoes.Desenvolvedor,
preferencias:['Assistir filmes','viajar']

}

function exibir(obj:hobbies){



    console.log(obj);


    
}
    

exibir(anderson);