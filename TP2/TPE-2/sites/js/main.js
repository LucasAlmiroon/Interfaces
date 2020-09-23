const MAXFICHAS = 21;

let fichasj1 = [];
let fichasj2 = [];

function juegoNuevo(){
  let tablero = new Tablero(200,0);
  tablero.draw();
  for(let i = 0; i < MAXFICHAS; i ++){
      let fichajugador1 = new Ficha("ficha1",Math.random()*100,((Math.random()*400)));
      let fichajugador2 = new Ficha("ficha2",((Math.random()*100)+800),((Math.random()*400)));
      fichasj1.push(fichajugador1);
      fichasj2.push(fichajugador2);
  }
  dibujarFichas();
}

function dibujarFichas(){
  for (let i = 0; i < fichasj2.length; i++){
    fichasj1[i].draw();
    fichasj2[i].draw();
  }
}

juegoNuevo();