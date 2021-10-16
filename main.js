var caixaPreta = document.querySelector('#box-black')
var caixaBranca = document.getElementById('box-white')
var caixaLaranja = document.getElementById('box-orange')
var caixaCinza = document.getElementById('box-grey')


caixaPreta.addEventListener("mouseenter", hover)
caixaPreta.addEventListener("mouseout", out)
caixaPreta.addEventListener("mousedown", click)
caixaPreta.addEventListener("mouseup", desclick)


function hover(){
    caixaPreta.style.height = "12rem"
    caixaPreta.style.width = "12rem"
}

function out(){
    caixaPreta.style.height = "10rem"
    caixaPreta.style.width = "10rem"
}

function click(){
    caixaPreta.innerHTML = "Clicou"
}

function desclick(){
    caixaPreta.innerHTML = "Preto"
}

