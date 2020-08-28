document.addEventListener ("DOMContentLoaded", function(){

    let ctx = document.querySelector("#canvas").getContext("2d");
    let image1 = new Image();
    
    image1.src = "./img/paisaje.jpg"
    
    image1.onload = function(){
        dibujarImagen(this);
    }

    function dibujarImagen(image){
        ctx.drawImage(image,0,0,900,600);
    }

    /*function aplicarFiltro(){
 
    }

    let boton = document.getElementById("button");
    boton.addEventListener("click",aplicarFiltro());*/

})