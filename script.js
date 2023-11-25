let ranger = document.getElementById('ran');
let but = document.getElementById('gerador');
let val = document.getElementById('valor');
let senha = document.getElementById('password');
let resultado = document.getElementsByClassName('result');

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let novaSenha = '';

val.innerHTML = ranger.value
ran.oninput = function(){
    val.innerHTML = this.value
}

function gerar(){
    

}