var caixa = document.getElementsByClassName('box')
var textInitial = document.getElementsByClassName('texto-cor')
var textClick = document.getElementsByClassName('texto-click')
var textDisable = document.getElementsByClassName('texto-cor-desativado')

for(let x=0; x<caixa.length; x++){
    caixa[x].addEventListener('mouseover', hover)
    caixa[x].addEventListener('mouseleave', out)
    caixa[x].addEventListener('mousedown', () => click(x))
    caixa[x].addEventListener('mouseup', () => desclick(x))
}




function hover(event){
    this.style.height = "12rem"
    this.style.width = "12rem"
}

function out(event){
    this.style.height = "10rem"
    this.style.width = "10rem"
}

function click(value){
    textDisable[value].style.display = "none"
    textInitial[value].style.display = "none"
    textClick[value].style.display = "block"

    
}

function desclick(value){
    textClick[value].style.display = "none"
    textDisable[value].style.display = "block"
}

