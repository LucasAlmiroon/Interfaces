let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let radio = (canvas.width/2)*0.8;

let centerX = (canvas.width/2);
let centerY = (canvas.height/2);


function clearCanvas(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function setHora(){
    return new Date();
}

function segundos(){
    clearCanvas();
    minutos();
    horas();
    let seg = setHora();
    let agujaSeg = radio * 0.85;
    let angulo = (seg.getSeconds()/60)*2*Math.PI - Math.PI/2;

    dibujar(angulo,agujaSeg);
}

function minutos(){
    let min = setHora();
    let agujaMin = radio * 0.75;
    let angulo = (min.getMinutes()/60)*2*Math.PI - Math.PI/2;
    
    dibujar(angulo,agujaMin);
}

function horas(){
    let hora = setHora();
    let agujaH = radio * 0.65;
    let angulo = (hora.getHours()/60)*2*Math.PI - Math.PI/2;
    dibujar(angulo,agujaH);
}

function dibujar(angulo,aguja){
    let px = centerX + Math.cos(angulo)*aguja;
    let py = centerY + Math.sin(angulo)*aguja;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.lineTo(px,py);
    ctx.stroke();
}

segundos();
setInterval(segundos,1000);
