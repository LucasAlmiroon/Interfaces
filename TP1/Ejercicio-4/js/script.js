document.addEventListener ("DOMContentLoaded", function(){
    //Ejercicio-4
    
    let ctx = document.getElementById("canvas").getContext("2d");
    
    let grd = ctx.createLinearGradient(0, 0, 0, 300);
    grd.addColorStop(0, "#000000");
    grd.addColorStop(1, "#FFFFFF");
    
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,300,300);
    
    //Ejercicio-5
    
    let ctx2 = document.getElementById("canvas2").getContext("2d");
    
    let grd2 = ctx.createLinearGradient(0,0,300,0);
    grd2.addColorStop(0,"#000000");
    grd2.addColorStop(0.5,"#FFFF00");
    grd2.addColorStop(1,"#FF0000");


    ctx2.fillStyle = grd2;
    ctx2.fillRect(0,0,300,300)



})