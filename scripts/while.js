let index = 0;

// while (index <= 100) {
//     console.log(index)
//     index++
// } 
const person = {
    name: 'andre',
    age: 21
};

for (property in person){  //usado em objetos
    console.log(person[property]) //não muito usado
}