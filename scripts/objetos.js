let person = {
    nome : 'André',
    idade : 21,
    cidade : 'teresina',
    hobbies : ['jogar', 'ler', 'musica', 'anime'],
    namorada : {
        nome: 'ravena',
        idade: 24,
    }
};
const {hobbies,cidade,idade,nome} = person; //deconstructor
person.comidaFav = 'macarronada';
console.log(nome);
console.log(hobbies);
console.log(person)

