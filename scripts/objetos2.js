let tarefas = [
    {
        id: 1,
        description: 'Estudar programação',
        isCompleted: false
    },
    {
        id: 2,
        description: 'Fazer arte',
        isCompleted: true
    },
    {
        id: 3,
        description: 'Tomar banho',
        isCompleted: false
    }
];

//envia para servidor = stringfy, recebe de um servidor = parse

const tarefasJSON = JSON.stringify(tarefas);//converte em JSON
console.log(tarefasJSON)//deixou de ser um objeto

const tarefasLIST = JSON.parse(tarefasJSON)
console.log('')
console.log(tarefasLIST)