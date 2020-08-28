document.addEventListener ("DOMContentLoaded", function(){
    let ctx = document.getElementById("canvas").getContext("2d");
    
    let grd = ctx.createLinearGradient(0,0,0,300);
    grd.addColorStop(0,"#E2E17B");
    grd.addColorStop(0.25,"#AAA939");
    grd.addColorStop(0.5,"#72720F");
    grd.addColorStop(1,"#3A3A00");

    ctx.fillStyle = grd;
    ctx.fillRect(0,0,500,300);

})