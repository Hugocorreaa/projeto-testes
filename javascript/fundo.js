document.getElementById("button-green").addEventListener("click", verde);
document.getElementById("button-red").addEventListener("click", vermelho);
document.getElementById("button-blue").addEventListener("click", azul);
document.getElementById("button-black").addEventListener("click", remove)

function verde() {
  document.getElementById("name").classList.remove("vermelho");
  document.getElementById("name").classList.remove("azul");
  document.getElementById("name").classList.add("verde");
}

function vermelho() {
  document.getElementById("name").classList.remove("verde");
  document.getElementById("name").classList.remove("azul");
  document.getElementById("name").classList.add("vermelho");
}

function azul() {
  document.getElementById("name").classList.remove("verde");
  document.getElementById("name").classList.remove("vermelho");
  document.getElementById("name").classList.add("azul");
}

function remove(){
    document.getElementById("name").classList.remove("verde")
    document.getElementById("name").classList.remove("vermelho")
    document.getElementById("name").classList.remove("azul")
}
