// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//Primeiro metodo de tipagem

let employee: {code: number, name: string} = {
  code: 0,
  name:''  
};


employee.code = 10;
employee.name = "John";

//Segundo metodo de tipagem

interface Employee {
    code:number,
    name:String 

}

const employee2: Employee = {
    code: 0,
    name: ''
}

employee2.code = 10;
employee2.name = 'Jonh'

