let ranger = document.getElementById('ran');
let but = document.getElementById('gerador');
let val = document.getElementById('valor');
let senha = document.getElementById('password');
let resultado = document.getElementsByClassName('result');
let apagao = document.getElementById('semtela')
let sucesso = document.getElementById('copy')

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@';
let novaSenha = '';

val.innerHTML = ranger.value
ranger.oninput = function(){
    val.innerHTML = this.value
}

function gerar(){
    let pass = ''
    for(let i = 0, n = charset.length; i < ran.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()* n));
    }

    apagao.style.display = 'block';
    senha.innerHTML = `${pass}`;
    console.log(pass);
    novaSenha = pass;
    sucesso.style.display = 'none'
}

function copysenha(){
    navigator.clipboard.writeText(novaSenha);
    sucesso.style.display = 'block'
}