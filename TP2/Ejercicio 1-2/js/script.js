document.addEventListener ("DOMContentLoaded", function(){
 let canvas = document.querySelector("#canvas");
 let context = canvas.getContext("2d");
 let cw = canvas.width;
 let ch = canvas.height;

 let figuras = [];

 function addFigura(){
     if (Math.random() >= 0.5){
         addRectangulo();
     }else{
         addCirculo();
     }

     dibujarFiguras();
 }

 function dibujarFiguras(){
     for (let i = 0; i < figuras.length; i++){
         figuras[i].draw();
     }
 }

 function addRectangulo(){
     let posX = Math.round(Math.random()*cw);
     let posY = Math.round(Math.random()*ch);
     let color = randomRGBA();
     let rect = new Rectangulo(posX,posY,20,20,color,context);
     figuras.push(rect);
 }

 function addCirculo(){
    let posX = Math.round(Math.random()*cw);
    let posY = Math.round(Math.random()*ch);
    let color = randomRGBA();
    let circulo = new Circulo(posX,posY,10,color,context);
    figuras.push(circulo);
 }

 function addFiguras(){
     addFigura();
     if (figuras.length < 20){
         setTimeout(addFiguras,333)
     }
 }
 setTimeout(()=>{
     addFiguras();
 },333);

 function randomRGBA(){
     let r = Math.round(Math.random()* 255);
     let g = Math.round(Math.random()* 255);
     let b = Math.round(Math.random()* 255);
     let a = 255;

     return `rgba( ${r} , ${g}, ${b}, ${a})`;
 }

});