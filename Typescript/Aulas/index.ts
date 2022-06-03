//function soma (a: number,b:number) {
//
//    return a + b;
//}
//
//console.log(soma(3,5));

//=--------------nterface (Define um contrato de estrutura de dados)
//
//interface IAnimal {
//nome: string;
//tipo: 'terrestre' | 'aquatico';
//
//}
//
//interface IFelino extends IAnimal {
//visaoNoturna: boolean;
//porte: 'pequeno' | 'Médio' | 'Grande';
//}
//
//
//const felino: IFelino = {
//nome:  'Leão',
//tipo: "terrestre",
//visaoNoturna:true,
//porte:'pequeno',
//
//}
//
//type IDomestico = IFelino | IAnimal; //---------------- (Type é usado para unir Interfaces)
//
//const animal: IDomestico = {
//   nome: 'Gato',
//   tipo:'terrestre',
//   visaoNoturna:true,
//   porte:'Grande', 
//
//    
//    }
//
//console.log(animal, felino);
//

// -----Informar o tipo de elemento ao typescript
//const input = document.getElementById('input') as HTMLInputElement;
//input.addEventListener('input', (event) => {
//console.log('Digitei');
//});
//
//const ver = document.getElementById('ver') as HTMLButtonElement;
//
//ver.addEventListener('click', (event) => {
//
//    console.log(input.value);
//});

// ----------------Generic types

//function adicionaApendiceALista<T>(array: any[], valor: T){
//
//    console.log(array.map(item => item + valor));
//}
//
//adicionaApendiceALista([1,2,3],2);
//

//// ------ Condicionais apartir de parâmetros
//interface IUsuario {
//id: string;
//email: string;
//}
//
//
//interface IAdim extends IUsuario{
//cargo: 'gerente' | 'coordenador' | 'supervisor'
//
//}
//
//function redirecione(usuario: IUsuario | IAdim){
//if ('cargo' in usuario){
//    return console.group('redirecione para área de adiministração', usuario);
//}
//
// return console.group('redirecione para área de usuario', usuario);
//}
//
//const usuario:IAdim = {
//    id: 'Anderson',
//    email:'Anderson.silvab@gmail.com',
//    cargo:'coordenador'
//};
//
//const usuario2:IAdim | IUsuario = {
//    id: 'Anderson',
//    email:'Anderson.silvab@gmail.com',
//    
//};
//
//redirecione(usuario);
//redirecione(usuario2);

//--------------Parâmetro opcional

// ------ Condicionais apartir de parâmetros
//interface IUsuario {
//    id: string;
//    email: string;
//    cargo?: 'Gerente' | 'Coordenador' | 'Supervisor' | 'Funcionário'
//    }
//   
//function redirecione(usuario: IUsuario){
//    if (usuario.cargo){
//        return console.log("Redirecione para a URL especifica");
//    }
//    return console.log("Redirecione para usuário");
//}
//    
//const usuario1: IUsuario = {
//    id:'Anderson',
//    email:'Anderson.silvab@gmail.com',
//
//}
//
//redirecione(usuario1);


// -------------------MODO SOMENTE LEITURA
interface Cachorro {
nome: string;
idade: number;
parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    +readonly [k in keyof Cachorro]-?: Cachorro[k]; //----Modo de leitura: estou adicionando o modo de somente leitura em cada chave do chaveiro Cachorro e estou removendo o modo de parametro opcional para cada chave
}

class MeuCachorro implements CachorroSomenteLeitura{
    idade: number;
    nome: string;
    parqueFavorito: string;

    constructor(nome, idade,parque) {
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parque
    }
}

const cao = new MeuCachorro('Apolo', 14,'Jaqueira');

console.log(cao);