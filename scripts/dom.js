//SELECIONA UM ELEMENTO
// const nomeTExt = document.querySelector('#paragrafo');
// nomeTExt.textContent = 'PARTE'
// console.log(nomeTExt);


const nomeSenha = document.querySelectorAll(".itens");
console.log(nomeSenha);

console.log(nomeSenha[1].remove())


function showpass() {
    let x = document.querySelector('#pass_word');
    if (x.type === 'password') {
        x.type = 'text'
    }
    else{
        x.type = 'password'
    }

}

