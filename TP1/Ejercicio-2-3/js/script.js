document.addEventListener ("DOMContentLoaded", function(){
    
    //Ejercicio 2
    
    let ctx = document.querySelector("#canvas").getContext("2d");
    ctx.fillStyle = "#00FFAA";
    ctx.fillRect(0,0,150,100);
    
    //Ejercicio 3

    let imgData = ctx.createImageData(100, 100);
    
    for (let x = 0; x < 100; x++){
        for (let y = 0; y < 100; y++){
            setPixel(imgData,x,y,0,255,0,255);
        }
    }
    
    function setPixel(imgData,x,y,r,g,b,a){
        
        i = (x + y * imgData.width)*4;
        imgData.data[i + 0] = r;
        imgData.data[i + 1] = g;
        imgData.data[i + 2] = b;
        imgData.data[i + 3] = a;
    }
    
    ctx.putImageData(imgData, 800, 0);
      
})