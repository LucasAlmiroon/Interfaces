document.addEventListener ("DOMContentLoaded", function(){
    let ctx = document.querySelector("#canvas").getContext("2d");

    let imgData = ctx.createImageData(500, 500);

    for (let x = 0; x < 500; x++){
        for (let y = 0; y < 500; y++){
            setPixel(imgData,x,y,255);
        }
    }
    
    function setPixel(imgData,x,y,a){
        let coef= (x-(imgData.width/2)) / (imgData.width/2);
        let color = 255*(1-coef);        
        i = (x + y * imgData.width)*4;
        imgData.data[i] = color;
        imgData.data[i + 1] = color;
        imgData.data[i + 2] = color;
        imgData.data[i + 3] = a;
        

    /*    if (x <= imgData.width/4){
            let coef= -1*(x-(imgData.width/2)) / (imgData.width/2);
            let color = 255*(1-coef);
            imgData.data[i] = 255;
            imgData.data[i + 1] = color;
            imgData.data[i + 2] = color;
            imgData.data[i + 3] = a;
            
        }else if ((x > imgData.width/4) && (x <= imgData.width/3)) {
            let coef= -1*(x-(imgData.width/2)) / (imgData.width/2);
            let color = 255*(1-coef);
            imgData.data[i] = 255;
            imgData.data[i + 1] = color;
            imgData.data[i + 2] = 255;
            imgData.data[i + 3] = a;
        
        }else if (x > imgData.width/3 && x <= imgData.width/2){
            let coef= (x-(imgData.width/2)) / (imgData.width/2);
            let color = 255*(1-coef);
            imgData.data[i] = color;
            imgData.data[i + 1] = 255;
            imgData.data[i + 2] = color;
            imgData.data[i + 3] = a;
        
        }else if (x > imgData.width/2 && x <= imgData.width){
            let coef= (x-(imgData.width/2)) / (imgData.width/2);
            let color = 255*(1-coef);
            
            imgData.data[i] = color;
            imgData.data[i + 1] = 255;
            imgData.data[i + 2] = color;
            imgData.data[i + 3] = a;
        }*/
        ctx.putImageData(imgData, 0, 0);   
    }


    
    
    
    /*let grd = ctx.createLinearGradient(0,0,0,300);
    grd.addColorStop(0,"#E27B7B");
    grd.addColorStop(0.25,"#AA3939");
    grd.addColorStop(0.5,"#720F0F");
    grd.addColorStop(1,"#3A0000");

    ctx.fillStyle = grd;*/

});