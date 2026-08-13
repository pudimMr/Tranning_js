//função padrão
// function sum(a,b) {
//     return a+ b;
// }

// const sumValor = sum(2,2)
// console.log(sumValor)

const sum = (a, b = 10) =>{
    return a + b;
}

const sum2 = (a,b) => a+b;

let valor = sum(2)
let valor2 = sum2(2,4)
console.log(valor)
console.log(valor2)