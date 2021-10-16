var caixaPreta = document.querySelector('#box-black')
var caixaBranca = document.getElementById('box-white')
var caixaLaranja = document.getElementById('box-orange')
var caixaCinza = document.getElementById('box-grey')

[caixaPreta, caixaBranca, caixaLaranja, caixaCinza].forEach(element => {
    element.addEventListener("mouseover", hover);
    element.addEventListener("mouseout", out);
    element.addEventListener("mousedown", click);
    element.addEventListener("mouseup", desclick);
    
});


function hover(event){
    event.target.style.height = "12rem"
    event.target.style.width = "12rem"
}

function out(event){
    event.target.style.height = "10rem"
    event.target.style.width = "10rem"
}

function click(event){
    event.target.innerHTML = "Clicou"
}

function desclick(event){
    event.target.innerHTML = "Preto"
}

