// class Person {
//     constructor(Nome,Idade,peso,altura){
//         this.Idade = Idade;
//         this.Nome = Nome;
//         this.altura = altura;
//         this.peso = peso;
//     }
//     pegarNome() {
//         console.log(`${this.Nome}`)
//     }
// }

// const person = new Person('André',21,67,1.74);

// person.pegarNome()

class Animal {
    constructor(nome){
        this.nome = nome;
    }
    andar(){
        console.log(`${this.nome} andou!`)
    }
};

class dog extends Animal {
    constructor(nome,raça){
        super(nome);
        this.raça = raça
    }
    dizRaça() {
        console.log(`${this.nome} é da raça ${this.raça}`)
    }
};

let dogo = new Animal('Yumi');
let luffy = new dog('luffy','labrador');
luffy.andar();
luffy.dizRaça();