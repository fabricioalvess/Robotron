
var controle = document.querySelectorAll("[data-controle]");
var estatistica = document.querySelectorAll("[data-estatistica]");


controle.forEach(c=>{
    c.addEventListener("click",e=>{
        console.log("oqie tem no controle clicado: ?"+ e.target.dataset.controle)
       manipulaDados(e.target.dataset.controle, e.target.parentNode )
        atualizaEstatisticas(e.target.dataset.peca);
    
    })
})


 function manipulaDados(c, e){""
    var peca = e.querySelector("[data-contador]")
    if(c === "-"){
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
 }

 const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

function atualizaEstatisticas(peca){

    estatistica.forEach((elemento) =>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}