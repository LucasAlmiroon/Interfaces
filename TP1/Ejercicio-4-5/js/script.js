document.addEventListener ("DOMContentLoaded", function(){
    //Ejercicio-4
    
    let ctx = document.querySelector("#canvas").getContext("2d");
    
    let imgData = ctx.createImageData(500, 500);
    
    for (let x = 0; x < 500; x++){
        for (let y = 0; y < 500; y++){
            setPixel(imgData,x,y,255);
        }
    }
    
    function setPixel(imgData,x,y,a){
        let coeficiente = 255 / imgData.width;
        
        i = (x + y * imgData.width)*4;
        
        imgData.data[i + 0] = coeficiente * x;
        imgData.data[i + 1] = coeficiente * x;
        imgData.data[i + 2] = coeficiente * x;
        imgData.data[i + 3] = a;
    }
    
    ctx.putImageData(imgData, 0, 0);  
    
    
    /*let rgd = ctx.createLinearGradient(0, 0, 0, 300);
    rgd.addColorStop(0, "#000000");
    rgd.addColorStop(1, "#FFFFFF");
    
    ctx.fillStyle = rgd;
    ctx.fillRect(0,0,300,300);*/
    
    //Ejercicio-5
    
    let ctx2 = document.querySelector("#canvas2").getContext("2d");

    let imgData2 = ctx2.createImageData(500, 500);

    for (let x = 0; x < 500; x++){
        for (let y = 0; y < 500; y++){
            setPixel2(imgData2,x,y,255);
        }
    }
    
    function setPixel2(imgData2,x,y,a){
        let coeficiente = 255 / imgData2.width;
        
        i = (x + y * imgData2.width)*4;
        if (x <= imgData2.width/2){
            imgData2.data[i] = coeficiente * x;
            imgData2.data[i + 1] = coeficiente * x;
            imgData2.data[i + 2] = 0;
            imgData2.data[i + 3] = a;
            
        }else {
            imgData2.data[i] = coeficiente * x;
            imgData2.data[i + 1] = 255 - (coeficiente * x);
            imgData2.data[i + 2] = 0;
            imgData2.data[i + 3] = a;
        }
    }
    
    ctx2.putImageData(imgData2, 0, 0);

    /*let rgd2 = ctx.createLinearGradient(0,0,300,0);
    rgd2.addColorStop(0,"#000000");
    rgd2.addColorStop(0.5,"#FFFF00");
    rgd2.addColorStop(1,"#FF0000");

    ctx2.fillStyle = rgd2;
    ctx2.fillRect(0,0,300,300);*/

})