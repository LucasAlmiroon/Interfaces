function cargarPagina(){
    let elementos = document.getElementsByClassName("esconder");
    while (elementos.length > 0){
        elementos[0].classList.remove("esconder");
    }

    let carga = document.getElementsByClassName("carga");
    carga[0].classList.add("esconder");
    let body = document.querySelector("body");
    body.classList.add("animacion");
}

function quitarAnimacion(){
    let body = document.getElementsByClassName("animacion");
    body[0].classList.remove("animacion");
}

setTimeout(cargarPagina,3000);
setTimeout(quitarAnimacion,6000);