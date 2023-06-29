var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")

function RolarParaDireita() {
  Leonardo.style = "display:none"
  Bruna.style = "display:flex"
  setaEsquerda.style = "display:flex"
  setaDireita.style = "display:none; margin-top:55px"
}

function RolarParaEsquerda() {
  Leonardo.style = "display:flex"
  Bruna.style = "display:none"
  setaEsquerda.style = "display:none; margin-top:55px"
  setaDireita.style = "display:flex"
}