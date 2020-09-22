let canvas = document.querySelector("#juego");
let ctx = canvas.getContext("2d");

function cargarImagen(nombre,empiezax,empiezay){
    let image = new Image();

    image.src = "./sites/img/" + nombre + ".png";
    image.id=nombre;
    
    image.onload = function(){    
      ctx.drawImage(image,empiezax,empiezay);
    }
}
cargarImagen("tablero",300,100);
