document.addEventListener ("DOMContentLoaded", function(){

    let ctx = document.getElementById("canvas").getContext("2d");
    
    let grd = ctx.createLinearGradient(0, 0, 0, 200);
    grd.addColorStop(0, "#000000");
    grd.addColorStop(1, "#FFFFFF");


    ctx.fillStyle = grd;
    ctx.fillRect(1,1,150,200);




})