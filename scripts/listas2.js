const numbers = [1,2,3,4,5,6];

const multiplicaPorDois = numbers.map(function(number) {
    return number * 2
});

const ages = [8,11,10,55];

const pares = ages.filter(function(age) {
    return age % 2 == 0
});

const sumOfAges =  ages.reduce(function(age, accumulator) {
    return accumulator + age
},0);//accumulator começando em 0 como contador

console.log(sumOfAges);
console.log(pares);
console.log(multiplicaPorDois);