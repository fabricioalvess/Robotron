
var controle = document.querySelectorAll("[data-controle]");

controle.forEach((controleComIndiceClicado)=>{
    controleComIndiceClicado.addEventListener("click",(eventoIndiceClicado)=>{
        manipulaDados(eventoIndiceClicado.target.dataset.controle, eventoIndiceClicado.target.parentNode)
        console.log(controleComIndiceClicado.target)
    })
})



 function manipulaDados(controleComIndiceClicado, eventoIndiceClicadoPai){
    var peca = eventoIndiceClicadoPai.querySelector("[data-contador]")
    if(controleComIndiceClicado === "-"){
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
 }
