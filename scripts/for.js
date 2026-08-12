// for (let index = 0; index <=20; index ++){//(valor;enquanto;faça)
//     console.log(index);
// };

const persons = ['André', 'Carlos'];

for (let i = 0; i <= persons.length; i++) {// percorrendo os itens da lista
    console.log(persons[i])
};

for (let person of persons){
    console.log(person);
};

persons.forEach(function(person,index){//para cada pessoa em person, log pessoa
    console.log(index)
    console.log(person);
});

