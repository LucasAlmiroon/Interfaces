const MAXFICHAS = 21;
const COL = 7;
const FILA = 6;

let canvas = document.querySelector("#juego");
let ctx = canvas.getContext("2d");
let fichasj1 = [];
let fichasj2 = [];
let tablero;
let conFicha = false;
let matriz = [];
let cliqueado;
let turno = false;



function crearMatriz(){    
  for (x = 0; x < COL; x++){
    matriz[x] = [];
    for (y = 0; y < FILA; y++){
        matriz[x][y] = 0;
    }
  }
}


function juegoNuevo(){
  
  let imageTablero = new Image();
  imageTablero.src = "./sites/img/tablero.png";
  imageTablero.onload = function(){
    tablero = new Tablero(200,10,ctx,imageTablero,matriz);
    tablero.draw();
  }

  let image = new Image();
  image.src = "./sites/img/ficha1.png";
  image.onload = function(){
  for(let i = 0; i < MAXFICHAS; i ++){
        let fichajugador1 = new Ficha(((Math.random()*100)+20),((Math.random()*400+20)),ctx,32,image);
        let fichajugador2 = new Ficha(((Math.random()*100)+850),((Math.random()*400+20)),ctx,32,image);
        fichasj1.push(fichajugador1);
        fichasj2.push(fichajugador2);
        dibujarFichas();
      }
    }
}

function dibujarFichas(){
  if (tablero){
    tablero.draw();
  }
  for (let i = 0; i < fichasj1.length; i++){
    fichasj1[i].draw();
    fichasj2[i].draw();
  }
}

function clearCanvas(color){
  ctx.fillStyle = color;
  ctx.fillRect(0,0,canvas.width,canvas.height);
  
}

function clickEnFicha(x,y){
  if(!turno){
    for (let i = 0; i < fichasj1.length; i++){
      const elemento = fichasj1[i];
      console.log(x + " - " + y); 
      if (elemento.isPointInside(x,y)){
        
        return elemento;
      }
    }
  }else {
    for (let i = 0; i < fichasj2.length; i++){
      const elemento = fichasj2[i];
      console.log(x + " - " + y); 
      if (elemento.isPointInside(x,y)){
        
        return elemento;
      }

    }
  }
}

function onMouseDown(e){
  conFicha = true;
  cliqueado = clickEnFicha(e.layerX,e.layerY);
  if (cliqueado != null && conFicha) {
    console.log(cliqueado);
    canvas.addEventListener('mousemove', e => {
      if(conFicha){
        dibujado(e.layerX,e.layerY);
      }
    });
    canvas.addEventListener('mouseup',onMouseUp);
  }else{
    console.log("No se agarro ficha o es el turno del otro jugador");
  }
}

function dibujado(x,y){
  cliqueado.setPosition(x,y);
  clearCanvas("white");
  dibujarFichas();
}

function setY(a){
  let j = 0;
    while(matriz[a][j] == 1 || matriz[a][j] == 2 && j < FILA){
        j++;
    }
    switch (j) {
      case 0:
        if (!turno){
          matriz[a][j] = 1;
        }else{
          matriz[a][j] = 2;
        }
        return 473;
        break;
      case 1:
        if (!turno){
          matriz[a][j] = 1;
        }else{
          matriz[a][j] = 2;
        }
        return 390;
        break;
      case 2:
        if (!turno){
          matriz[a][j] = 1;
        }else{
          matriz[a][j] = 2;
        }
        return 305;
        break;
      case 3:
        if (!turno){
          matriz[a][j] = 1;
        }else{
          matriz[a][j] = 2;
        }
        return 217;
        break;
      case 4:
        if (!turno){
          matriz[a][j] = 1;
        }else{
          matriz[a][j] = 2;
        }
        return 141;
        break;
      case 5:
        if (!turno){
          matriz[a][j] = 1;
        }else{
          matriz[a][j] = 2;
        }
        return 55;
        break;
      default:
        return 50;
        break;
        
    }
    
}

function setTurno(){
  if(turno){
    turno = false;
  }else{
    turno = true;
  }
}

function onMouseUp(e){
  let x = e.layerX;
  console.log(cliqueado);
  let y;
  if (x >= 214 && x <= 283){
     y = setY(0);
    dibujado(248,y);
    setTurno();
  }else if (x >= 298 && x <= 366){
    y = setY(1);
    dibujado(332,y);
    dibujarFichas();
    setTurno();
  }else if (x >= 380 && x <= 448){
    y = setY(2);
    dibujado(414,y);
    dibujarFichas();
    setTurno();
  }else if(x >= 467 && x <= 535){
    y = setY(3);
    dibujado(500,y)
    dibujarFichas();
    setTurno();
  }else if(x >= 549 && x <= 615){
    y = setY(4);
    dibujado(583,y);
    dibujarFichas();
    setTurno();
  }else if(x >= 634 && x <= 700){
    y = setY(5);
    dibujado(668,y);
    dibujarFichas();
    setTurno();
  }else if(x >= 715 && x <= 785){
    y = setY(6);
    dibujado(749,y);
    dibujarFichas();
    setTurno();
  }else{
    dibujado(50,50);
    dibujarFichas();
  }
  conFicha = false;
  console.table(matriz);

}

canvas.addEventListener('mousedown',onMouseDown,false);

crearMatriz();
juegoNuevo();