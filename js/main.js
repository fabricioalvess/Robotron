
var controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((controleComIndiceClicado)=>{
    controleComIndiceClicado.addEventListener("click",(eventoIndiceClicado)=>{
        manipulaDados(eventoIndiceClicado.target.textContent, eventoIndiceClicado.target.parentNode)
    })
})



 function manipulaDados(controleComIndiceClicado, eventoIndiceClicadoPai){
    var peca = eventoIndiceClicadoPai.querySelector(".controle-contador")
    if(controleComIndiceClicado === "-"){
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
 }
