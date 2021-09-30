const MAXFICHAS = 22;
const COL = 7;
const FILAS = 6;

let canvas = document.querySelector("#juego");
let ctx = canvas.getContext("2d");
//Utilizo un arreglo para las fichas de los jugadores y guardar una ficha en cada espacio
let fichasj1 = [];
let fichasj2 = [];
//La matriz que hace de tablero.
let matriz = [];

//Crea la matriz con la cantidad de columnas y filas.
function crearMatriz(){    
    for (x = 0; x < COL; x++){
      matriz[x] = [];
      for (y = 0; y < FILAS; y++){
        matriz[x][y] = 0;
      }
    }
}


//Se crea un juego nuevo, por ahora solo crea las fichas.
function juegoNuevo(){
    let image = new Image();
        image.src = "./sites/img/1.png";
        image.onload = function(){
            for(let i = 0; i < MAXFICHAS; i ++){
                let fichajugador1 = new Ficha(((Math.random()*100)+20),((Math.random()*400+20)),ctx,32,image);
                fichasj1.push(fichajugador1);
            }
        }    
    let imageficha2 = new Image();
    imageficha2.src = "./sites/img/2.png";
    imageficha2.onload = function(){
        for(let j = 0; j < MAXFICHAS; j++){
            let fichajugador2 = new Ficha(((Math.random()*100)+850),((Math.random()*400+20)),ctx,32,imageficha2);
            fichasj2.push(fichajugador2);
        }
    }    
    dibujarFichas();
}

//Dibuja cada ficha del arreglo.
function dibujarFichas(){
    for (let i = 0; i < fichasj1.length; i++){
        fichasj1[i].draw();
        fichasj2[i].draw();
    }
}

//Limpia el canvas, para cuando mueve la ficha.
function clearCanvas(color){
    ctx.fillStyle = color;
    ctx.fillRect(0,0,canvas.width,canvas.height);
}