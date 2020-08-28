document.addEventListener ("DOMContentLoaded", function(){
    let ctx = document.querySelector("#canvas").getContext("2d");
    
    let grd = ctx.createLinearGradient(0,0,0,300);
    grd.addColorStop(0,"#E27B7B");
    grd.addColorStop(0.25,"#AA3939");
    grd.addColorStop(0.5,"#720F0F");
    grd.addColorStop(1,"#3A0000");

    ctx.fillStyle = grd;
    ctx.fillRect(0,0,500,300);

})