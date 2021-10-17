var caixa = document.getElementsByClassName('box')
var textInitial = document.getElementsByClassName('texto-cor')
var textClick = document.getElementsByClassName('texto-click')
var textDisable = document.getElementsByClassName('texto-cor-desativado')

for(let x=0; x<caixa.length; x++){
    caixa[x].addEventListener('mouseover', hover)
    caixa[x].addEventListener('mouseleave', out)
    caixa[x].addEventListener('mousedown', click)
    caixa[x].addEventListener('mouseup', desclick)


}


function hover(event){
    this.style.height = "12rem"
    this.style.width = "12rem"
}

function out(event){
    this.style.height = "10rem"
    this.style.width = "10rem"
}

function click(event){
    textDisable[0].style.display = "none"
    textInitial[0].style.display = "none"
    textClick[0].style.display = "block"

    
}

function desclick(event){
    textClick[0].style.display = "none"
    textDisable[0].style.display = "block"
}

