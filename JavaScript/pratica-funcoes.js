/* const aluno1 = {
nome: "Anderson",
nota: 7,
};

const aluno2 = {
nome: "Emilly",
nota: 5,
};

const aluno3 = {
nome: "Sky",
nota: 10,
};

var alunos = [aluno1, aluno2, aluno3];

function aprovados(array,m) {
 var passaram = [];   

    for(let i = 0; i < alunos.length; i++){
       if (array[i].nota >= m) {
        passaram.push(array[i].nome);
        console.log(array[i].nome);
       } 
    
    }
    console.log(passaram);
};

aprovados(alunos,7); */
//const alunos = [obj1 = {nome: "Anderson",nota: 7, turma:18, idade:33}, obj2 = {
//    nome: "Emilly", nota: 5,turma:18, idade:25}, obj3 = {
//    nome: "Sky", nota: 10, turma: 20, idade:1}];
//
//function alunosAprovados (arr, media){
//   let aprovados = [];
//   
//    for (let i = 0; i < arr.length; i++) {
//
//        const {nome, nota} = arr[i];
//
//        if (nota >= media) {
//            aprovados.push(nome);
//        }
//    }
//
//   console.log(aprovados);
//};


//alunosAprovados(alunos,7);




function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
};

const obj1 = {nome: "Anderson",nota: 7, turma:18, idade:33,};
const obj2 = {nome: "Emilly", nota: 5,turma:18, idade:25,};
const obj3 = {nome: "Sky", nota: 10, turma: 20, idade:1,}; 

console.log(calculaIdade.call(obj2,15));

console.log(calculaIdade.call(obj1,15));

console.log(calculaIdade.apply(obj3,[15]));



